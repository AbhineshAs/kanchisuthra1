import "./profile.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyProfile from "../../components/myProfile/myProfile";
import Orders from "../../components/orders/orders";
import { useAuth } from "../../context/authContext";

export default function Profile() {
    const [activeMenu, setActiveMenu] = useState("dashboard");
    const { customer, loading, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate("/login");
        }
    }, [loading, isAuthenticated, navigate]);

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading profile...</span>
                </div>
                <p className="mt-3">Loading your account details...</p>
            </div>
        );
    }

    if (!isAuthenticated || !customer) {
        return null;
    }

    const formatOrders = () => {
        if (!customer.orders?.edges) return [];
        return customer.orders.edges.map(({ node }) => {
            const firstItem = node.lineItems?.edges?.[0]?.node;
            return {
                id: node.id,
                orderNo: `#${node.orderNumber}`,
                date: new Date(node.processedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                }),
                title: firstItem?.title || `Order #${node.orderNumber}`,
                quantity: node.lineItems?.edges?.reduce((acc, curr) => acc + curr.node.quantity, 0) || 1,
                status: node.fulfillmentStatus || node.financialStatus || "Processed",
                image: firstItem?.variant?.image?.url || "https://picsum.photos/150/200",
                total: `${node.currentTotalPrice?.currencyCode || "INR"} ${node.currentTotalPrice?.amount}`,
            };
        });
    };

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    const orders = formatOrders();

    return (
        <section className="profile-page">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12">
                        <h2>Welcome back, {customer.firstName || "Customer"}!</h2>
                        <p className="text-muted">{customer.email}</p>
                    </div>
                </div>

                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3">
                        <aside className="profile-sidebar">
                            <h6>Your Account</h6>

                            <button
                                className={activeMenu === "dashboard" ? "active" : ""}
                                onClick={() => setActiveMenu("dashboard")}
                            >
                                My Profile
                            </button>

                            <button
                                className={activeMenu === "orders" ? "active" : ""}
                                onClick={() => setActiveMenu("orders")}
                            >
                                Orders ({customer.numberOfOrders || orders.length})
                            </button>


                            <button className="logout-btn" onClick={handleLogout}>
                                <i className="bi bi-box-arrow-right me-2"></i>
                                Logout
                            </button>
                        </aside>
                    </div>

                    {/* Right Side */}
                    <div className="col-lg-9">
                        {activeMenu === "dashboard" && <MyProfile customer={customer} />}

                        {activeMenu === "orders" && (
                            orders.length > 0 ? (
                                <Orders orders={orders} />
                            ) : (
                                <div className="card p-4 text-center">
                                    <h4>No orders found</h4>
                                    <p className="text-muted">You haven't placed any orders yet.</p>
                                    <div>
                                        <Link to="/collection" className="btn btn-dark mt-2">
                                            Start Shopping
                                        </Link>
                                    </div>
                                </div>
                            )
                        )}

                        {activeMenu === "address" && <Addresses customer={customer} />}
                    </div>
                </div>
            </div>
        </section>
    );
}