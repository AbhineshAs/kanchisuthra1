import { useState } from "react";
import { Link } from "react-router-dom";
import { shopifyFetch } from "../../api/shopify";
import "./searchModal.css";

export default function SearchModal({ show, onClose }) {
    const [keyword, setKeyword] = useState("");
    const [products, setProducts] = useState([]);

    async function searchProducts(value) {
        setKeyword(value);

        if (!value.trim()) {
            setProducts([]);
            return;
        }

        try {
            const query = `
            query SearchProducts($query: String!) {
                products(first: 10, query: $query) {
                    nodes {
                        id
                        title
                        handle
                        featuredImage {
                            url
                        }
                        priceRange {
                            minVariantPrice {
                                amount
                            }
                        }
                    }
                }
            }
            `;

            const data = await shopifyFetch(query, {
                query: `title:*${value}*`,
            });

            setProducts(data?.data?.products?.nodes || []);
        } catch (error) {
            console.error("Search Error:", error);
            setProducts([]);
        }
    }

    if (!show) return null;

    return (
        <div className="search-overlay">
            <div className="search-box">
                <div className="d-flex justify-content-between mb-4">
                    <h3>Search</h3>

                    <button
                        className="btn-close"
                        onClick={onClose}
                    ></button>
                </div>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    value={keyword}
                    onChange={(e) => searchProducts(e.target.value)}
                />

                <div className="mt-4">
                    {products.length === 0 && keyword && (
                        <p>No products found.</p>
                    )}

                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.handle}`}
                            onClick={onClose}
                            className="search-item"
                        >
                            <img
                                src={product.featuredImage?.url || ""}
                                alt={product.title}
                            />

                            <div>
                                <h6>{product.title}</h6>
                                <p>
                                    ₹{product.priceRange?.minVariantPrice?.amount}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}