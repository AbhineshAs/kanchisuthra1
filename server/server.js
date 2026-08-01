import express from "express";
import cors from "cors";
import crypto from "crypto";
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Initialize Razorpay Instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || "",
    key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

/**
 * 1. Create Razorpay Order
 */
app.post("/api/razorpay/create-order", async (req, res) => {
    try {
        const { amount, currency = "INR" } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({ error: "Invalid order amount" });
        }

        const options = {
            amount: Math.round(amount * 100), // convert rupees to paise
            currency,
            receipt: `rcpt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);
        res.status(200).json({
            id: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error) {
        console.error("Razorpay order creation error:", error);
        res.status(500).json({ error: error.message || "Failed to create Razorpay order" });
    }
});

/**
 * 2. Verify Payment Signature & Create Paid Shopify Order via Admin API
 */
app.post("/api/razorpay/create-shopify-order", async (req, res) => {
    try {
        const {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            customer,
            shippingAddress,
            lineItems,
            totalAmount,
        } = req.body;

        // Step A: Verify Razorpay Signature
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
            .update(body.toString())
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ error: "Invalid Razorpay payment signature verification" });
        }

        // Step B: Create Shopify Paid Order via Shopify Admin API
        const shopDomain = process.env.SHOPIFY_STORE_DOMAIN;
        const adminToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

        if (!shopDomain || !adminToken) {
            return res.status(500).json({
                error: "Shopify Admin API configuration missing (SHOPIFY_STORE_DOMAIN or SHOPIFY_ADMIN_ACCESS_TOKEN)",
            });
        }

        const formattedLineItems = lineItems.map((item) => {
            // Helper to clean base64 GraphQL GID if needed e.g. "gid://shopify/ProductVariant/12345" -> 12345
            let variantId = item.variantId || item.id;
            if (typeof variantId === "string" && variantId.includes("/")) {
                const parts = variantId.split("/");
                variantId = parts[parts.length - 1];
            }

            return {
                variant_id: Number(variantId) || undefined,
                title: item.title,
                quantity: item.quantity || 1,
                price: item.price?.amount || item.price,
            };
        });

        const shopifyOrderPayload = {
            order: {
                line_items: formattedLineItems,
                customer: {
                    first_name: customer.firstName,
                    last_name: customer.lastName,
                    email: customer.email,
                    phone: customer.phone,
                },
                shipping_address: {
                    first_name: shippingAddress.firstName || customer.firstName,
                    last_name: shippingAddress.lastName || customer.lastName,
                    address1: shippingAddress.address,
                    address2: shippingAddress.apartment || "",
                    city: shippingAddress.city,
                    province: shippingAddress.state,
                    country: shippingAddress.country || "India",
                    zip: shippingAddress.pincode,
                    phone: shippingAddress.phone || customer.phone,
                },
                billing_address: {
                    first_name: shippingAddress.firstName || customer.firstName,
                    last_name: shippingAddress.lastName || customer.lastName,
                    address1: shippingAddress.address,
                    address2: shippingAddress.apartment || "",
                    city: shippingAddress.city,
                    province: shippingAddress.state,
                    country: shippingAddress.country || "India",
                    zip: shippingAddress.pincode,
                    phone: shippingAddress.phone || customer.phone,
                },
                financial_status: "paid",
                transactions: [
                    {
                        kind: "sale",
                        status: "success",
                        amount: String(totalAmount),
                        gateway: "Razorpay Direct Popup",
                        authorization: razorpay_payment_id,
                    },
                ],
                note: `Paid via Razorpay Direct Popup. Payment ID: ${razorpay_payment_id} | Razorpay Order ID: ${razorpay_order_id}`,
            },
        };

        const shopifyRes = await fetch(
            `https://${shopDomain}/admin/api/2025-01/orders.json`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Shopify-Access-Token": adminToken,
                },
                body: JSON.stringify(shopifyOrderPayload),
            }
        );

        const shopifyData = await shopifyRes.json();

        if (!shopifyRes.ok) {
            console.error("Shopify Order creation failed:", shopifyData);
            return res.status(shopifyRes.status).json({
                error: "Failed to create order in Shopify",
                details: shopifyData,
            });
        }

        res.status(200).json({
            success: true,
            order: shopifyData.order,
            message: "Shopify order created successfully!",
        });
    } catch (error) {
        console.error("Error creating Shopify order:", error);
        res.status(500).json({ error: error.message || "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Razorpay-Shopify Backend Server running on http://localhost:${PORT}`);
});
