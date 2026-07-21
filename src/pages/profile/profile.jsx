import "./profile.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyProfile from "../../components/myProfile/myProfile";
import Orders from "../../components/orders/orders";
import Addresses from "../../components/addresses/addresses";

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
                                My Profile
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
                                Addresses
                            </button>

                            <button
                                className="logout-btn"
                            >
                                <i className="bi bi-box-arrow-right"></i>

                                Logout
                            </button>
                        </aside>



                    </div>

                    {/* Right Side */}

                    <div className="col-lg-9">

                        <div className="col-lg-9">

                            {activeMenu === "dashboard" && (
                                <MyProfile />
                            )}

                            {activeMenu === "orders" && (
                                <Orders orders={orders} />
                            )}

                            {activeMenu === "address" && (
                                <Addresses />
                            )}

                            <section className="recommended-section">

                                {/* Silk Heritage */}

                            </section>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}