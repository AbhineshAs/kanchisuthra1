import { useEffect, useState } from "react";
import { shopifyFetch } from "../../api/shopify";
import { useCart } from "../../context/cartContext";
import { Link, useParams } from "react-router-dom";
import "./collectionProducts.css";

export default function CollectionProducts() {
    const { handle } = useParams();
    const { addProduct } = useCart();
    const [collection, setCollection] = useState(null);
    const [loading, setLoading] = useState(true);
    const [addedId, setAddedId] = useState(null);

    useEffect(() => {
        async function loadCollection() {
            setLoading(true);

            const query = `
            query($handle: String!) {
              collection(handle: $handle) {
                id
                title
                description

                products(first: 25) {
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

                    variants(first: 1) {
                      nodes {
                        id
                      }
                    }
                  }
                }
              }
            }`;

            try {
                const data = await shopifyFetch(query, { handle });
                setCollection(data?.data?.collection || null);
            } catch (error) {
                console.error("Error loading collection:", error);
                setCollection(null);
            }

            setLoading(false);
        }

        loadCollection();
    }, [handle]);

    const handleAddToCart = async (variantId, productId) => {
        setAddedId(productId);
        await addProduct(variantId);
        setTimeout(() => setAddedId(null), 1500);
    };

    if (loading) {
        return (
            <div className="collection-loading-container py-5 text-center">
                <div className="spinner-border text-warning mb-3" role="status" style={{ color: "#c79d67" }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h5 className="fw-light text-muted">Loading Collection...</h5>
            </div>
        );
    }

    if (!collection) {
        return (
            <div className="container py-5 text-center">
                <h3 className="mb-3" style={{ fontFamily: "Cormorant Garamond, serif" }}>Collection Not Found</h3>
                <p className="text-muted mb-4">The collection you are looking for does not exist or has been moved.</p>
                <Link to="/" className="btn btn-dark rounded-pill px-4">Back to Home</Link>
            </div>
        );
    }

    const products = collection.products?.nodes || [];

    return (
        <div className="collection-products-page py-5">
            <div className="container">
                {/* Header Banner */}
                <div className="collection-header text-center mb-5">
                    <span className="collection-tagline">KANCHISUTHRA CURATED</span>
                    <h1 className="collection-heading-title mt-2">{collection.title}</h1>
                    <div className="gold-divider mx-auto my-3"></div>
                    {collection.description && (
                        <p className="collection-description text-muted mx-auto">{collection.description}</p>
                    )}
                    <span className="badge rounded-pill bg-light text-dark border border-secondary-subtle px-3 py-2 mt-2">
                        {products.length} {products.length === 1 ? "Product" : "Products"} Available
                    </span>
                </div>

                {/* Products Grid */}
                {products.length === 0 ? (
                    <div className="text-center py-5">
                        <i className="bi bi-bag-x display-4 text-muted d-block mb-3"></i>
                        <h4 className="text-muted fw-light">No products available in this collection yet.</h4>
                    </div>
                ) : (
                    <div className="row g-4 justify-content-center">
                        {products.map((product) => {
                            const variantId = product.variants?.nodes?.[0]?.id;
                            const isAdded = addedId === product.id;

                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 d-flex" key={product.id}>
                                    <div className="product-card w-100 d-flex flex-column">
                                        <Link to={`/product/${product.handle}`} className="product-link text-decoration-none">
                                            <div className="product-image-wrap position-relative">
                                                <img
                                                    src={product.featuredImage?.url || "https://via.placeholder.com/400x500"}
                                                    alt={product.title}
                                                    className="product-img img-fluid"
                                                />
                                                <span className="badge-exclusive">Handcrafted</span>
                                            </div>

                                            <div className="product-info-wrap p-3 d-flex flex-column flex-grow-1">
                                                <h5 className="product-item-title text-truncate-2 mb-2">{product.title}</h5>
                                                <div className="product-price fw-bold">
                                                    ₹{Number(product.priceRange.minVariantPrice.amount).toLocaleString()}
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="p-3 pt-0 mt-auto">
                                            {variantId && (
                                                <button
                                                    className={`add-cart-btn btn w-100 py-2 rounded-3 fw-medium d-flex align-items-center justify-content-center ${
                                                        isAdded ? "btn-success" : "btn-dark"
                                                    }`}
                                                    onClick={() => handleAddToCart(variantId, product.id)}
                                                >
                                                    <i className={`bi ${isAdded ? "bi-check-lg" : "bi-bag-plus"} me-2`}></i>
                                                    {isAdded ? "Added to Cart!" : "Add to Cart"}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}