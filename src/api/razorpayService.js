const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

/**
 * Step 1: Request backend to create a Razorpay Order
 */
export async function createRazorpayOrder(amount, currency = "INR") {
    try {
        const response = await fetch(`${BACKEND_URL}/api/razorpay/create-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount, currency }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Failed to create Razorpay order");
        }

        return data; // { id, amount, currency }
    } catch (error) {
        if (error.name === "TypeError" || error.message.includes("Load failed") || error.message.includes("Failed to fetch")) {
            console.warn("Backend server connection failed. Make sure server is running on " + BACKEND_URL);
            throw new Error(
                `Backend server offline (${BACKEND_URL}). Please start the server using 'npm run server'.`
            );
        }
        throw error;
    }
}

/**
 * Step 2: Verify payment signature and create Shopify Order automatically
 */
export async function verifyAndCreateShopifyOrder(paymentData) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/razorpay/create-shopify-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(paymentData),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Failed to create Shopify order");
        }

        return data; // { success: true, order: ShopifyOrder }
    } catch (error) {
        if (error.name === "TypeError" || error.message.includes("Load failed") || error.message.includes("Failed to fetch")) {
            throw new Error(
                `Backend server offline (${BACKEND_URL}). Please start the server using 'npm run server'.`
            );
        }
        throw error;
    }
}
