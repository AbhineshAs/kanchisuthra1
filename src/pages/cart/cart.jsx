import "./cart.css";
import { useCart } from "../../context/cartContext";
import { useNavigate, Link } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();
    const {
        cart,
        updateQuantity,
        removeProduct,
    } = useCart();

    if (!cart) {
        return (
            <div className="cart-loading-container py-5 text-center">
                <div className="spinner-border mb-3" role="status" style={{ color: "#c79d67" }}>
                    <span className="visually-hidden">Loading Cart...</span>
                </div>
                <h5 className="fw-light text-muted">Loading Shopping Cart...</h5>
            </div>
        );
    }

    const items = cart.lines?.nodes || [];
    const totalQuantity = cart.totalQuantity || items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="cart-page py-5">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-5">
                    <span className="cart-subtitle">KANCHISUTHRA BAG</span>
                    <h1 className="cart-main-title mt-1">Shopping Cart</h1>
                    <div className="gold-line mx-auto my-3"></div>
                    <p className="text-muted">Review your selected luxury weaves before checkout</p>
                </div>

                {items.length === 0 ? (
                    <div className="empty-cart-card card p-5 text-center shadow-sm rounded-4 mx-auto" style={{ maxWidth: "500px" }}>
                        <div className="empty-icon-wrap rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-bag-x display-4 text-muted"></i>
                        </div>
                        <h4 className="fw-medium mb-2">Your Shopping Cart is Empty</h4>
                        <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
                            Explore our exquisite collections of handcrafted silk sarees to add your favorite weaves.
                        </p>
                        <Link to="/" className="btn btn-dark py-2.5 px-4 rounded-pill fw-medium">
                            <i className="bi bi-grid me-2"></i> Explore Collections
                        </Link>
                    </div>
                ) : (
                    <div className="row g-4">
                        {/* LEFT: CART ITEMS */}
                        <div className="col-lg-8">
                            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                                <h5 className="fw-semibold mb-0 text-dark">
                                    Cart Items ({totalQuantity})
                                </h5>
                                <span className="text-muted small">Price</span>
                            </div>

                            {items.map((item) => {
                                const isDefaultVariant = item.merchandise.title === "Default Title";
                                const itemTotal = Number(item.merchandise.price.amount) * item.quantity;

                                return (
                                    <div className="cart-item-card card p-3 mb-3 border rounded-4 shadow-sm" key={item.id}>
                                        <div className="d-flex align-items-center">
                                            <Link to={`/product/${item.merchandise.product.handle}`} className="cart-img-wrap flex-shrink-0">
                                                <img
                                                    src={item.merchandise.product.featuredImage?.url || "https://via.placeholder.com/150"}
                                                    alt={item.merchandise.product.title}
                                                    className="cart-product-img rounded-3 img-fluid"
                                                />
                                            </Link>

                                            <div className="cart-details flex-grow-1 ms-3 ms-md-4">
                                                <Link
                                                    to={`/product/${item.merchandise.product.handle}`}
                                                    className="text-decoration-none text-dark"
                                                >
                                                    <h5 className="cart-product-title mb-1">
                                                        {item.merchandise.product.title}
                                                    </h5>
                                                </Link>

                                                {!isDefaultVariant && (
                                                    <span className="badge bg-light text-secondary border fw-normal mb-2" style={{ fontSize: "12px" }}>
                                                        Variant: {item.merchandise.title}
                                                    </span>
                                                )}

                                                <div className="item-unit-price text-muted small mb-3">
                                                    ₹{Number(item.merchandise.price.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })} each
                                                </div>

                                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                    {/* Qty Selector */}
                                                    <div className="qty-picker d-flex align-items-center border rounded-pill px-2 py-1 bg-light">
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-link text-dark p-0 px-2 text-decoration-none"
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        >
                                                            <i className="bi bi-dash-lg"></i>
                                                        </button>
                                                        <span className="fw-semibold px-2" style={{ minWidth: "24px", textAlign: "center" }}>
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-link text-dark p-0 px-2 text-decoration-none"
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        >
                                                            <i className="bi bi-plus-lg"></i>
                                                        </button>
                                                    </div>

                                                    {/* Trash Action */}
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger btn-sm rounded-circle d-flex align-items-center justify-content-center p-2"
                                                        style={{ width: "36px", height: "36px" }}
                                                        title="Remove Item"
                                                        onClick={() => removeProduct(item.id)}
                                                    >
                                                        <i className="bi bi-trash3"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Item Total Price */}
                                            <div className="cart-item-total ms-3 text-end flex-shrink-0">
                                                <span className="fw-bold fs-5 text-dark" style={{ color: "#2b231d" }}>
                                                    ₹{itemTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT: ORDER SUMMARY */}
                        <div className="col-lg-4">
                            <div className="summary-card card p-4 border rounded-4 shadow-sm position-sticky" style={{ top: "100px" }}>
                                <h4 className="summary-title mb-4 pb-2 border-bottom fw-semibold">Order Summary</h4>

                                <div className="d-flex justify-content-between mb-3">
                                    <span className="text-muted">Subtotal ({totalQuantity} items)</span>
                                    <span className="fw-medium text-dark">
                                        ₹{Number(cart.cost.subtotalAmount.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                                    </span>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span className="text-muted">Estimated Shipping</span>
                                    <span className="text-success fw-medium">Free</span>
                                </div>

                                <div className="gold-line w-100 my-3"></div>

                                <div className="d-flex justify-content-between align-items-center mb-4 fs-5">
                                    <span className="fw-bold text-dark">Total</span>
                                    <span className="fw-bold fs-4" style={{ color: "#c79d67" }}>
                                        ₹{Number(cart.cost.totalAmount.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                                    </span>
                                </div>

                                <button
                                    className="checkout-btn btn btn-dark w-100 py-3 rounded-3 fw-semibold shadow-sm d-flex align-items-center justify-content-center"
                                    onClick={() => navigate("/checkout")}
                                >
                                    <i className="bi bi-shield-lock me-2"></i> Proceed to Checkout
                                </button>

                                <div className="mt-4 pt-3 border-top text-center text-muted small">
                                    <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
                                        <span><i className="bi bi-truck me-1 text-dark"></i> Free Delivery</span>
                                        <span><i className="bi bi-patch-check me-1 text-dark"></i> 100% Authentic</span>
                                    </div>
                                    <p className="mb-0 text-secondary" style={{ fontSize: "12px" }}>
                                        Taxes included. Standard shipping calculates at checkout.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}