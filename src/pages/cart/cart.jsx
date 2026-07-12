import "./cart.css";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();
    const {
        cart,
        updateQuantity,
        removeProduct,
    } = useCart();

    if (!cart) {
        return (
            <div className="container py-5">
                <h2>Loading Cart...</h2>
            </div>
        );
    }

    const items = cart.lines.nodes;

    return (
        <div className="cart-page container  mt-3">

            <h2 className="cart-title mb-4">
                Shopping Cart
            </h2>

            <div className="row">

                {/* LEFT */}

                <div className="col-lg-8">

                    {items.length === 0 ? (
                        <h4>Your cart is empty.</h4>
                    ) : (
                        items.map((item) => (

                            <div
                                className="cart-item d-flex mb-4"
                                key={item.id}
                            >

                                <img
                                    src={item.merchandise.product.featuredImage?.url}
                                    alt={item.merchandise.product.title}
                                    width="150"
                                />

                                <div className="cart-details ms-4">

                                    <h4>
                                        {item.merchandise.product.title}
                                    </h4>

                                    <p>
                                        Variant :
                                        {" "}
                                        {item.merchandise.title}
                                    </p>

                                    <h5>
                                        ₹{(
                                            Number(item.merchandise.price.amount) *
                                            item.quantity
                                        ).toFixed(2)}                                    </h5>

                                    <div className="qty mt-3">

                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                        >
                                            -
                                        </button>

                                        <span className="mx-3">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm ms-4"
                                            onClick={() => removeProduct(item.id)}
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))
                    )}

                </div>

                {/* RIGHT */}

                <div className="col-lg-4">

                    <div className="summary">

                        <h3>Order Summary</h3>

                        <div className="summary-row d-flex justify-content-between">

                            <span>Subtotal</span>

                            <span>
                                ₹{cart.cost.subtotalAmount.amount}
                            </span>

                        </div>

                        <div className="summary-row d-flex justify-content-between">

                            <span>Total</span>

                            <span>
                                ₹{cart.cost.totalAmount.amount}
                            </span>

                        </div>

                        <hr />

                        <button
                            className="checkout-btn w-100"
                            onClick={() => navigate("/checkout")}

                        >
                            Proceed to Checkout
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}