import { useEffect, useState } from "react";
import { shopifyFetch } from "../../api/shopify";
import { useCart } from "../../context/cartContext";
import { Link, useParams } from "react-router-dom";
import "./collectionProducts.css"

export default function CollectionProducts() {
    const { handle } = useParams();
    const { addProduct } = useCart();
    const [collection, setCollection] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCollection() {
            setLoading(true);

            const query = `
            query($handle: String!) {
              collection(handle: $handle) {
                id
                title
                description

                products(first: 20) {
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

                setCollection(data.data.collection);
            } catch (error) {
                console.error(error);
                setCollection(null);
            }

            setLoading(false);
        }

        loadCollection();
    }, [handle]);

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <h3>Loading...</h3>
            </div>
        );
    }

    if (!collection) {
        return (
            <div className="container py-5 text-center">
                <h3>Collection not found.</h3>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <h2 className="text-center mb-5">
                {collection.title}
            </h2>

            <div className="row">

                {collection.products.nodes.map((product) => (

                    <div
                        className="col-lg-3 col-md-4 col-sm-6 mb-4"
                        key={product.id}
                    >
                        <div className="product-card">

                            <Link
                                to={`/product/${product.handle}`}
                                className="product-link"
                            >
                                <div className="product-image">

                                    <img
                                        src={product.featuredImage?.url}
                                        alt={product.title}
                                    />

                                </div>

                                <div className="product-info">

                                    <h5>{product.title}</h5>

                                    <p>
                                        ₹{Number(product.priceRange.minVariantPrice.amount).toLocaleString()}
                                    </p>

                                </div>

                            </Link>

                            <button
                                className="m-3 rounded-4"
                                onClick={() =>
                                    addProduct(product.variants.nodes[0].id)
                                }
                            >
                                Add to Cart
                            </button>

                        </div>
                    </div>

                ))}

            </div>

        </div>
    );
}