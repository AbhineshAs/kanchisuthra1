import "./checkout.css";
import { useCart } from "../../context/cartContext";
import { useState } from "react";

export default function Checkout() {
    const {
        cart,
        saveCheckoutInformation,
        checkout,
    } = useCart();
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
        country: ""

    });
    if (!cart) return <h2>Loading...</h2>;
    function handleChange(e) {

        setForm({

            ...form,
            [e.target.name]: e.target.value,

        });

    }
    return (

        <div className="checkout-page">

            <div className="container py-5">

                <div className="row">

                    {/* LEFT */}

                    <div className="col-lg-7">

                        <h2 className="mb-4">
                            Checkout
                        </h2>

                        <div className="checkout-box">

                            <h5>Contact Information</h5>

                            <input
                                className="form-control mb-4"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />

                            <input
                                className="form-control mb-4"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                            />

                            <h5>Shipping Address</h5>

                            <div className="row">

                                <div className="col-md-6">
                                    <input
                                        className="form-control mb-3"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        className="form-control mb-3"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                    />
                                </div>

                            </div>

                            <input
                                className="form-control mb-3"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                placeholder="Address"
                            />

                            <input
                                className="form-control mb-3"
                                name="apartment"
                                value={form.apartment}
                                onChange={handleChange}
                                placeholder="Apartment"
                            />

                            <div className="row">

                                <div className="col-md-6">
                                    <input
                                        className="form-control mb-3"
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        className="form-control mb-3"
                                        name="state"
                                        value={form.state}
                                        onChange={handleChange}
                                        placeholder="State"
                                    />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-md-6">
                                    <input
                                        className="form-control mb-3"
                                        name="pincode"
                                        value={form.pincode}
                                        onChange={handleChange}
                                        placeholder="Pincode"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        className="form-control mb-3"
                                        name="country"
                                        value={form.country}
                                        onChange={handleChange}
                                        placeholder="Country"
                                    />
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="col-lg-5">

                        <div className="summary">

                            <h3>Order Summary</h3>

                            {cart.lines.nodes.map(item => (

                                <div
                                    className="summary-item"
                                    key={item.id}
                                >

                                    <img
                                        src={item.merchandise.product.featuredImage?.url}
                                        alt=""
                                    />

                                    <div>

                                        <h6>
                                            {item.merchandise.product.title}
                                        </h6>

                                        <small>
                                            Qty : {item.quantity}
                                        </small>

                                    </div>

                                    <span>

                                        ₹
                                        {(Number(item.merchandise.price.amount) *
                                            item.quantity).toFixed(2)}

                                    </span>

                                </div>

                            ))}

                            <hr />

                            <div className="d-flex justify-content-between">

                                <strong>Subtotal</strong>

                                <strong>

                                    ₹{cart.cost.subtotalAmount.amount}

                                </strong>

                            </div>

                            <div className="d-flex justify-content-between mt-3">

                                <strong>Total</strong>

                                <strong>

                                    ₹{cart.cost.totalAmount.amount}

                                </strong>

                            </div>

                            <button
                                className="pay-btn"
                                onClick={async () => {

                                    await saveCheckoutInformation(form);

                                    checkout();

                                }}
                            >
                                Continue to Payment
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}