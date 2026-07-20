import "./profile.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {

    const [activeMenu, setActiveMenu] = useState("dashboard");
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    const customer = {
        firstName: "Anjali",
        lastName: "Nair",
        customerSince: "Customer since October 2022"
    };

    const orders = [
        {
            id: 1,
            image: "https://picsum.photos/150/200?1",
            title: "Reticuli Varani Jacquard Saree",
            orderNo: "#KS-89243",
            date: "12 Jul 2026",
            quantity: 1,
            status: "Fulfilled"
        },
        {
            id: 2,
            image: "https://picsum.photos/150/200?2",
            title: "Sunset Gold Zari Border Saree",
            orderNo: "#KS-89110",
            date: "06 Jul 2026",
            quantity: 2,
            status: "Delivered"
        }
    ];
    useEffect(() => {

        async function loadRecommendedProducts() {

            const query = `
        {
          products(first:4){

            nodes{

              id
              title
              handle

              featuredImage{
                url
              }

              priceRange{

                minVariantPrice{
                  amount
                }

              }

            }

          }

        }`;

            try {

                const data = await shopifyFetch(query);

                setRecommendedProducts(
                    data.data.products.nodes
                );

            } catch (err) {

                console.log(err);

            }

        }

        loadRecommendedProducts();

    }, []);
    return (

        <section className="profile-page">

            <div className="container">

                {/* Header */}

                <div className="profile-header">

                    <div>

                        <span className="profile-label">
                            Namaste
                        </span>

                        <h1>

                            {customer.firstName} {customer.lastName}

                        </h1>

                        <p>

                            {customer.customerSince}

                        </p>

                    </div>


                </div>

                {/* Content */}

                <div className="row">

                    {/* Sidebar */}

                    <div className="col-lg-3">

                        <aside className="profile-sidebar">

                            <h6>
                                Your Account
                            </h6>

                            <button
                                className={activeMenu === "dashboard" ? "active" : ""}
                                onClick={() => setActiveMenu("dashboard")}
                            >
                                Account Dashboard
                            </button>

                            <button
                                className={activeMenu === "orders" ? "active" : ""}
                                onClick={() => setActiveMenu("orders")}
                            >
                                Orders
                            </button>

                            <button
                                className={activeMenu === "address" ? "active" : ""}
                                onClick={() => setActiveMenu("address")}
                            >
                                Addresses & Payments
                            </button>


                        </aside>

                        {/* Support Card */}

                        <div className="support-card">

                            <h4>

                                Wardrobe
                                <br />
                                Support

                            </h4>

                            <p>

                                Need assistance with your
                                wardrobe or order?

                            </p>

                            <button>

                                Reach Out

                            </button>

                            <div className="support-phone">

                                📞 Call us at
                                <br />
                                +91 9876543210

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="col-lg-9">

                        <div className="orders-header">

                            <h2>

                                Order History

                            </h2>

                            <button>

                                View All Purchases

                            </button>

                        </div>

                        {/* Order cards will come in Part 3 */}
                        <div className="orders-list">

                            {orders.map((order) => (

                                <div
                                    className="order-card"
                                    key={order.id}
                                >

                                    {/* Image */}

                                    <div className="order-image">

                                        <img
                                            src={order.image}
                                            alt={order.title}
                                        />

                                    </div>

                                    {/* Content */}

                                    <div className="order-content">

                                        <div className="order-top">

                                            <div>

                                                <h4>

                                                    {order.title}

                                                </h4>

                                                <span>

                                                    Order No. {order.orderNo}

                                                </span>

                                            </div>

                                            <span className="order-status">

                                                {order.status}

                                            </span>

                                        </div>

                                        <div className="order-middle">

                                            <p>

                                                Ordered on <strong>{order.date}</strong>

                                            </p>

                                            <p>

                                                {order.quantity} Item{order.quantity > 1 ? "s" : ""}

                                            </p>

                                        </div>

                                        <div className="order-bottom">

                                            <button>

                                                Track Order

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>
                        <section className="recommended-section">

                            <div className="recommended-header">

                                <div>

                                    <span>
                                        Curated For You
                                    </span>

                                    <h2>

                                        Silk Heritage

                                    </h2>

                                </div>

                                <Link to="/collection">

                                    View Collection →

                                </Link>

                            </div>

                            <div className="row">

                                {recommendedProducts.map((product) => (

                                    <div
                                        className="col-lg-3 col-md-6 mb-4"
                                        key={product.id}
                                    >

                                        <div className="recommended-card">

                                            <Link
                                                to={`/product/${product.handle}`}
                                            >

                                                <div className="recommended-image">

                                                    <img
                                                        src={product.featuredImage?.url}
                                                        alt={product.title}
                                                    />

                                                </div>

                                            </Link>

                                            <div className="recommended-content">

                                                <h5>

                                                    {product.title}

                                                </h5>

                                                <p>

                                                    ₹
                                                    {Number(
                                                        product.priceRange.minVariantPrice.amount
                                                    ).toLocaleString()}

                                                </p>

                                                <Link
                                                    className="shop-btn"
                                                    to={`/product/${product.handle}`}
                                                >

                                                    View Details

                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </section>
                        {/* Silk Heritage will come in Part 4 */}

                    </div>

                </div>

            </div>

        </section>

    );

}