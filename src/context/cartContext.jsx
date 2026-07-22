import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";

import {
    createCart,
    getCart,
    addToCart,
    updateCart,
    removeFromCart,
    updateBuyerIdentity,
} from "../api/cart";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(null);
    const [showAddedModal, setShowAddedModal] = useState(false);
    const [adding, setAdding] = useState(false);

    const navigate = useNavigate();

    // Load Cart
    useEffect(() => {
        async function loadCart() {
            try {
                let cartId = localStorage.getItem("shopify_cart_id");

                if (cartId) {
                    const cartData = await getCart(cartId);
                    if (cartData && cartData.id) {
                        setCart(cartData);
                        return;
                    }
                }

                // If no cartId or getCart failed, create a fresh cart
                const newCart = await createCart();
                if (newCart && newCart.id) {
                    localStorage.setItem("shopify_cart_id", newCart.id);
                    setCart(newCart);
                }
            } catch (err) {
                console.error("Cart loading error on refresh:", err);
            }
        }

        loadCart();
    }, []);

    // Add Product
    async function addProduct(variantId, showPopup = true) {
        setAdding(true);
        try {
            const cartId = localStorage.getItem("shopify_cart_id");
            const updated = await addToCart(cartId, variantId);
            setCart(updated);

            if (showPopup) {
                setShowAddedModal(true);
            }
            return updated;
        } catch (error) {
            console.error("Failed to add product to cart:", error);
        } finally {
            setAdding(false);
        }
    }

    // Update Qty
    async function updateQuantity(lineId, quantity) {
        const cartId = localStorage.getItem("shopify_cart_id");

        if (quantity <= 0) {
            await removeFromCart(cartId, lineId);
        } else {
            await updateCart(cartId, lineId, quantity);
        }

        const updated = await getCart(cartId);
        setCart(updated);
    }

    // Remove Product
    async function removeProduct(lineId) {
        const cartId = localStorage.getItem("shopify_cart_id");
        await removeFromCart(cartId, lineId);
        const updated = await getCart(cartId);
        setCart(updated);
    }

    async function saveCheckoutInformation(form) {
        const cartId = localStorage.getItem("shopify_cart_id");

        await updateBuyerIdentity(
            cartId,
            {
                email: form.email,
                phone: form.phone,
            },
            {
                address: {
                    address1: form.address,
                    address2: form.apartment,
                    city: form.city,
                    provinceCode: form.state,
                    countryCode: "IN",
                    zip: form.zip,
                    firstName: form.firstName,
                    lastName: form.lastName,
                }
            }
        );

        const updated = await getCart(cartId);
        setCart(updated);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                adding,
                addProduct,
                updateQuantity,
                removeProduct,
                saveCheckoutInformation,
                openAddedModal: () => setShowAddedModal(true),
                closeAddedModal: () => setShowAddedModal(false),

                checkout: () => {
                    if (cart?.checkoutUrl) {
                        window.location.href = cart.checkoutUrl;
                    }
                }
            }}
        >
            {children}

            {/* Product Added Success Popup Modal */}
            {showAddedModal && (
                <div
                    className="cart-modal-overlay"
                    onClick={() => setShowAddedModal(false)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.55)",
                        backdropFilter: "blur(4px)",
                        zIndex: 999999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                    }}
                >
                    <div
                        className="cart-modal-card bg-white p-4 rounded-4 shadow-lg text-center"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: "420px",
                            width: "100%",
                            position: "relative",
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => setShowAddedModal(false)}
                            style={{
                                position: "absolute",
                                top: "12px",
                                right: "16px",
                                background: "none",
                                border: "none",
                                fontSize: "22px",
                                cursor: "pointer",
                                color: "#888",
                            }}
                        >
                            ×
                        </button>

                        <div
                            className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{
                                width: "64px",
                                height: "64px",
                                backgroundColor: "#e6f4ea",
                                color: "#198754",
                                fontSize: "32px",
                            }}
                        >
                            <i className="bi bi-check-circle-fill"></i>
                        </div>

                        <h4 className="mb-2 fw-semibold" style={{ color: "#111" }}>
                            Product Added Successfully!
                        </h4>
                        <p className="text-muted small mb-4">
                            Your item has been added to your shopping cart.
                        </p>

                        <div className="d-grid gap-2">
                            <button
                                className="btn btn-dark py-2 rounded-3 fw-medium"
                                style={{ backgroundColor: "#111", borderColor: "#111" }}
                                onClick={() => {
                                    setShowAddedModal(false);
                                    navigate("/cart");
                                }}
                            >
                                <i className="bi bi-bag-check me-2"></i>
                                View Shopping Cart ({cart?.totalQuantity || 1})
                            </button>
                            <button
                                className="btn btn-outline-secondary py-2 rounded-3"
                                onClick={() => setShowAddedModal(false)}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}