import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function OrderSuccess() {
    const location = useLocation();
    const order = location.state?.order;

    return (
        <div className="order-success-page py-5 my-5 text-center">
            <div className="container" style={{ maxWidth: "650px" }}>
                <div className="card p-4 p-md-5 border-0 shadow-sm rounded-4" style={{ background: "#fffdf9", border: "1px solid #f1e4d3" }}>
                    <div className="mb-3">
                        <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "3.5rem" }}></i>
                    </div>
                    <span className="text-uppercase tracking-wider text-muted small fw-semibold">Order Placed Successfully</span>
                    <h2 className="mt-2 mb-3 fw-light" style={{ color: "#3a2d27", fontFamily: "serif" }}>
                        Thank You for Your Order!
                    </h2>
                    <div className="gold-divider mx-auto mb-4" style={{ width: "60px", height: "2px", backgroundColor: "#c79d67" }}></div>

                    {order ? (
                        <div className="order-details text-start bg-white p-4 rounded-3 border mb-4">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Shopify Order Number:</span>
                                <strong className="text-dark">{order.name || `#${order.order_number}`}</strong>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Payment Status:</span>
                                <span className="badge bg-success text-capitalize">{order.financial_status || "Paid"}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Total Amount:</span>
                                <strong>₹{Number(order.total_price || order.current_total_price || 0).toLocaleString("en-IN")}</strong>
                            </div>
                            {order.customer?.email && (
                                <div className="d-flex justify-content-between">
                                    <span className="text-muted">Confirmation Sent To:</span>
                                    <span>{order.customer.email}</span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <p className="text-muted mb-4">
                            Your payment was verified and your order has been registered in Shopify.
                        </p>
                    )}

                    <p className="small text-muted mb-4">
                        A confirmation email with shipping details will be sent shortly.
                    </p>

                    <div>
                        <Link to="/collection" className="btn px-4 py-2 text-white fw-semibold rounded-pill" style={{ backgroundColor: "#c79d67", borderColor: "#c79d67" }}>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
