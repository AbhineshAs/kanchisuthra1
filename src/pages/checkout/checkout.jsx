import "./checkout.css";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { cart, saveCheckoutInformation, checkout } = useCart();
    const { customer } = useAuth();
    const navigate = useNavigate();

    const [isAutoFilled, setIsAutoFilled] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [savedAddresses, setSavedAddresses] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [showNewAddressForm, setShowNewAddressForm] = useState(false);

    const [form, setForm] = useState({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        pincode: "",
        country: "India",
    });

    // Load saved addresses from customer account & localStorage (Flipkart style)
    useEffect(() => {
        let list = [];

        // 1. Customer account addresses
        if (customer) {
            const custAddrs = customer.addresses?.edges?.map((edge) => edge.node) || [];
            if (customer.defaultAddress && !custAddrs.some((a) => a.id === customer.defaultAddress.id)) {
                custAddrs.unshift(customer.defaultAddress);
            }

            custAddrs.forEach((addr) => {
                list.push({
                    id: addr.id || `cust_${Date.now()}_${Math.random()}`,
                    firstName: addr.firstName || customer.firstName || "",
                    lastName: addr.lastName || customer.lastName || "",
                    email: customer.email || "",
                    phone: addr.phone || customer.phone || "",
                    address: addr.address1 || "",
                    apartment: addr.address2 || "",
                    city: addr.city || "",
                    state: addr.province || "",
                    pincode: addr.zip || "",
                    country: addr.country || "India",
                    isDefault: addr.id === customer.defaultAddress?.id,
                    tag: "Account Address",
                });
            });
        }

        // 2. LocalStorage address from previous checkout
        const localSaved = localStorage.getItem("kanchisuthra_saved_address");
        if (localSaved) {
            try {
                const parsed = JSON.parse(localSaved);
                if (parsed.address && !list.some((a) => a.address === parsed.address && a.pincode === parsed.pincode)) {
                    list.push({
                        ...parsed,
                        id: "local_saved_address",
                        tag: "Saved Address",
                    });
                }
            } catch (err) {
                console.error("Error reading saved address from storage:", err);
            }
        }

        setSavedAddresses(list);

        // Auto-select first address if available
        if (list.length > 0) {
            const first = list[0];
            setSelectedAddressId(first.id);
            setForm({
                email: first.email || customer?.email || "",
                phone: first.phone || "",
                firstName: first.firstName || "",
                lastName: first.lastName || "",
                address: first.address || "",
                apartment: first.apartment || "",
                city: first.city || "",
                state: first.state || "",
                pincode: first.pincode || "",
                country: first.country || "India",
            });
            setIsAutoFilled(true);
        } else if (customer) {
            setForm((prev) => ({
                ...prev,
                email: customer.email || prev.email,
                firstName: customer.firstName || prev.firstName,
                lastName: customer.lastName || prev.lastName,
                phone: customer.phone || prev.phone,
            }));
        }
    }, [customer]);

    if (!cart) {
        return (
            <div className="checkout-loading-container py-5 text-center">
                <div className="spinner-border mb-3" role="status" style={{ color: "#c79d67" }}>
                    <span className="visually-hidden">Loading Checkout...</span>
                </div>
                <h5 className="fw-light text-muted">Preparing your checkout...</h5>
            </div>
        );
    }

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    // Auto-fill City & State on Pincode entry (Indian pincode lookup)
    const handlePincodeChange = async (e) => {
        const val = e.target.value;
        setForm((prev) => ({ ...prev, pincode: val }));

        if (val.length === 6 && /^\d+$/.test(val)) {
            try {
                const response = await fetch(`https://api.postalpincode.in/pincode/${val}`);
                const resData = await response.json();
                if (resData && resData[0] && resData[0].Status === "Success" && resData[0].PostOffice?.length > 0) {
                    const po = resData[0].PostOffice[0];
                    setForm((prev) => ({
                        ...prev,
                        city: po.District || po.Name || prev.city,
                        state: po.State || prev.state,
                    }));
                }
            } catch (err) {
                console.error("Pincode lookup error:", err);
            }
        }
    };

    const handleSelectAddress = (addr) => {
        setSelectedAddressId(addr.id);
        setShowNewAddressForm(false);
        setForm({
            email: addr.email || form.email,
            phone: addr.phone || form.phone,
            firstName: addr.firstName || form.firstName,
            lastName: addr.lastName || form.lastName,
            address: addr.address || form.address,
            apartment: addr.apartment || form.apartment,
            city: addr.city || form.city,
            state: addr.state || form.state,
            pincode: addr.pincode || form.pincode,
            country: addr.country || form.country || "India",
        });
        setIsAutoFilled(true);
    };

    const handleSubmitPayment = async (e) => {
        if (e && e.preventDefault) e.preventDefault();

        // Validate required address fields
        if (!form.email || !form.phone || !form.firstName || !form.lastName || !form.address || !form.city || !form.state || !form.pincode) {
            alert("Please fill in all required shipping address fields.");
            return;
        }

        setIsProcessing(true);

        try {
            // Save address locally for future checkouts
            localStorage.setItem("kanchisuthra_saved_address", JSON.stringify(form));
            await saveCheckoutInformation(form);
        } catch (error) {
            console.error("Failed to update checkout information:", error);
        }

        if (cart?.checkoutUrl) {
            window.location.href = cart.checkoutUrl;
        } else {
            setIsProcessing(false);
            checkout();
        }
    };

    const formattedSubtotal = Number(cart.cost?.subtotalAmount?.amount || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });
    const formattedTotal = Number(cart.cost?.totalAmount?.amount || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });

    return (
        <div className="checkout-page py-5">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-5">
                    <span className="checkout-subtitle-tag">SECURE CHECKOUT</span>
                    <h1 className="checkout-main-title mt-1">Checkout</h1>
                    <div className="gold-divider mx-auto my-3"></div>
                    <p className="text-muted">Enter your shipping details to proceed to secure payment</p>
                </div>

                <div className="row g-4">
                    {/* LEFT FORM */}
                    <div className="col-lg-7">
                        {isAutoFilled && (
                            <div className="alert alert-autofill d-flex align-items-center mb-4 p-3 rounded-3" style={{ background: "#f5fbf7", border: "1px solid #d1e7dd", color: "#0f5132" }}>
                                <i className="bi bi-check-circle-fill me-2 fs-5 text-success"></i>
                                <div style={{ fontSize: "14px" }}>
                                    <strong>Address Auto-Filled:</strong> Delivery address loaded automatically!
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmitPayment}>
                            <div className="checkout-box card p-4 p-md-5 border rounded-4 shadow-sm">
                                {/* Contact Info */}
                                <div className="checkout-section-header d-flex align-items-center mb-3 pb-2 border-bottom">
                                    <span className="step-number me-2">1</span>
                                    <h5 className="mb-0 fw-semibold">Contact Information</h5>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small text-muted fw-medium">Email Address *</label>
                                        <input
                                            className="form-control custom-input"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="name@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small text-muted fw-medium">Phone Number *</label>
                                        <input
                                            className="form-control custom-input"
                                            name="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Shipping Address */}
                                <div className="checkout-section-header d-flex align-items-center mt-4 mb-3 pb-2 border-bottom">
                                    <span className="step-number me-2">2</span>
                                    <h5 className="mb-0 fw-semibold">Shipping Address</h5>
                                </div>

                                {/* Flipkart Style Saved Address Selection Cards */}
                                {savedAddresses.length > 0 && (
                                    <div className="saved-addresses-section mb-4">
                                        <label className="form-label fw-semibold text-dark mb-2">Select Delivery Address</label>
                                        <div className="row g-3">
                                            {savedAddresses.map((addr) => {
                                                const isSelected = selectedAddressId === addr.id && !showNewAddressForm;
                                                return (
                                                    <div className="col-12" key={addr.id}>
                                                        <div
                                                            className={`saved-address-card card p-3 rounded-3 cursor-pointer ${
                                                                isSelected ? "border-dark shadow-sm bg-light-gold" : "border-light-subtle"
                                                            }`}
                                                            onClick={() => handleSelectAddress(addr)}
                                                            style={{
                                                                border: isSelected ? "2px solid #c79d67" : "1px solid #e2d7c7",
                                                                backgroundColor: isSelected ? "#fcf8f3" : "#ffffff",
                                                                transition: "all 0.2s ease",
                                                            }}
                                                        >
                                                            <div className="d-flex align-items-start">
                                                                <input
                                                                    className="form-check-input me-3 mt-1"
                                                                    type="radio"
                                                                    name="selectedAddressRadio"
                                                                    checked={isSelected}
                                                                    onChange={() => handleSelectAddress(addr)}
                                                                    style={{ accentColor: "#c79d67", width: "18px", height: "18px" }}
                                                                />
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                                                        <strong className="text-dark">
                                                                            {addr.firstName} {addr.lastName}
                                                                        </strong>
                                                                        <span className="badge bg-secondary-subtle text-dark border px-2 py-1" style={{ fontSize: "11px" }}>
                                                                            {addr.isDefault ? "DEFAULT" : addr.tag || "SAVED"}
                                                                        </span>
                                                                    </div>
                                                                    <p className="mb-1 text-secondary small">
                                                                        {addr.address}{addr.apartment ? `, ${addr.apartment}` : ""}, {addr.city}, {addr.state} - {addr.pincode}
                                                                    </p>
                                                                    <small className="text-dark fw-medium">Mobile: {addr.phone}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-dark mt-3 rounded-pill px-3"
                                            onClick={() => {
                                                setShowNewAddressForm(!showNewAddressForm);
                                                setSelectedAddressId(null);
                                            }}
                                        >
                                            <i className={`bi ${showNewAddressForm ? "bi-dash" : "bi-plus-lg"} me-1`}></i>
                                            {showNewAddressForm ? "Use Saved Address" : "Add / Edit Different Address"}
                                        </button>
                                    </div>
                                )}

                                {/* Address Fields */}
                                {(savedAddresses.length === 0 || showNewAddressForm || selectedAddressId) && (
                                    <div className="address-fields-wrap">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small text-muted fw-medium">First Name *</label>
                                                <input
                                                    className="form-control custom-input"
                                                    name="firstName"
                                                    value={form.firstName}
                                                    onChange={handleChange}
                                                    placeholder="First Name"
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small text-muted fw-medium">Last Name *</label>
                                                <input
                                                    className="form-control custom-input"
                                                    name="lastName"
                                                    value={form.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Last Name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label small text-muted fw-medium">Street Address *</label>
                                            <input
                                                className="form-control custom-input"
                                                name="address"
                                                value={form.address}
                                                onChange={handleChange}
                                                placeholder="House / Flat No., Building Name, Street Address"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label small text-muted fw-medium">Apartment, suite, etc. (Optional)</label>
                                            <input
                                                className="form-control custom-input"
                                                name="apartment"
                                                value={form.apartment}
                                                onChange={handleChange}
                                                placeholder="Apartment, suite, landmark, etc."
                                            />
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small text-muted fw-medium">Pincode / Zip Code (Auto-fills City & State) *</label>
                                                <input
                                                    className="form-control custom-input"
                                                    name="pincode"
                                                    value={form.pincode}
                                                    onChange={handlePincodeChange}
                                                    placeholder="600001"
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small text-muted fw-medium">City *</label>
                                                <input
                                                    className="form-control custom-input"
                                                    name="city"
                                                    value={form.city}
                                                    onChange={handleChange}
                                                    placeholder="City"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small text-muted fw-medium">State *</label>
                                                <input
                                                    className="form-control custom-input"
                                                    name="state"
                                                    value={form.state}
                                                    onChange={handleChange}
                                                    placeholder="State"
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small text-muted fw-medium">Country *</label>
                                                <input
                                                    className="form-control custom-input"
                                                    name="country"
                                                    value={form.country}
                                                    onChange={handleChange}
                                                    placeholder="Country"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Payment Method */}
                                <div className="checkout-section-header d-flex align-items-center mt-4 mb-3 pb-2 border-bottom">
                                    <span className="step-number me-2">3</span>
                                    <h5 className="mb-0 fw-semibold">Payment Method</h5>
                                </div>

                                <div className="payment-box p-3 rounded-3 border">
                                    <div className="form-check d-flex align-items-center m-0">
                                        <input
                                            className="form-check-input me-3"
                                            type="radio"
                                            name="paymentMethodOption"
                                            id="paymentDirect"
                                            value="shopify"
                                            checked={true}
                                            readOnly
                                            style={{ accentColor: "#c79d67", width: "18px", height: "18px" }}
                                        />
                                        <div>
                                            <label className="form-check-label fw-semibold text-dark cursor-pointer d-block" htmlFor="paymentDirect">
                                                Payment Gateway (UPI, Cards, Netbanking & Wallets)
                                            </label>
                                            <small className="text-muted">Fast & encrypted gateway checkout</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT ORDER SUMMARY */}
                    <div className="col-lg-5">
                        <div className="summary card p-4 border rounded-4 shadow-sm position-sticky" style={{ top: "100px" }}>
                            <h4 className="summary-title mb-4 pb-2 border-bottom fw-semibold">Order Summary</h4>

                            <div className="cart-items-preview mb-4">
                                {cart.lines.nodes.map((item) => {
                                    const itemTotal = Number(item.merchandise.price.amount) * item.quantity;
                                    return (
                                        <div className="summary-item d-flex align-items-center mb-3 pb-3 border-bottom" key={item.id}>
                                            <img
                                                src={item.merchandise.product.featuredImage?.url || "https://via.placeholder.com/80"}
                                                alt={item.merchandise.product.title}
                                                className="summary-product-img rounded-3 img-fluid flex-shrink-0"
                                            />

                                            <div className="ms-3 flex-grow-1">
                                                <h6 className="summary-item-title mb-1 text-dark fw-medium">
                                                    {item.merchandise.product.title}
                                                </h6>
                                                <small className="text-muted">Qty: {item.quantity}</small>
                                            </div>

                                            <span className="fw-semibold text-dark flex-shrink-0 ms-2">
                                                ₹{itemTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Subtotal</span>
                                <strong className="text-dark">₹{formattedSubtotal}</strong>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Shipping</span>
                                <span className="text-success fw-medium">Free</span>
                            </div>

                            <div className="gold-divider w-100 my-3"></div>

                            <div className="d-flex justify-content-between align-items-center mb-4 fs-5">
                                <span className="fw-bold text-dark">Total Amount</span>
                                <span className="fw-bold fs-4" style={{ color: "#c79d67" }}>
                                    ₹{formattedTotal}
                                </span>
                            </div>

                            <button
                                type="button"
                                className="pay-btn btn btn-dark w-100 py-3 rounded-3 fw-semibold shadow-sm d-flex align-items-center justify-content-center"
                                disabled={isProcessing}
                                onClick={handleSubmitPayment}
                            >
                                {isProcessing ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                        Redirecting to Gateway...
                                    </>
                                ) : (
                                    <>
                                        <i className="bi bi-shield-lock-fill me-2"></i> Proceed to Payment (₹{formattedTotal})
                                    </>
                                )}
                            </button>

                            <div className="mt-4 pt-3 border-top text-center text-muted small">
                                <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
                                    <span><i className="bi bi-lock-fill me-1 text-success"></i> 256-Bit SSL Encrypted</span>
                                    <span><i className="bi bi-patch-check-fill me-1 text-primary"></i> Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}