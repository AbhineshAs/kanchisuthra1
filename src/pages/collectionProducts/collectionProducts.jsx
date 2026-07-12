import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopifyFetch } from "../../api/shopify";

export default function CollectionProducts() {

    const { handle } = useParams();
    const [collection, setCollection] = useState(null);

    useEffect(() => {

        async function loadCollection() {

            const query = `
            query($handle: String!) {
              collection(handle: $handle) {
                title

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

                    variants(first:1){
                      nodes{
                        id
                      }
                    }
                  }
                }
              }
            }`;

            const data = await shopifyFetch(query, { handle });

            setCollection(data.data.collection);

        }

        loadCollection();

    }, [handle]);

    if (!collection) return <h2>Loading...</h2>;

    return (

        <div className="container py-5">

            <h2 className="text-center mb-5">
                {collection.title}
            </h2>

            <div className="row">

                {collection.products.nodes.map(product => (

                    <div
                        className="col-md-3 mb-4"
                        key={product.id}
                    >

                        <div className="card h-100">

                            <img
                                src={product.featuredImage?.url}
                                className="card-img-top"
                                alt={product.title}
                            />

                            <div className="card-body">

                                <h5>{product.title}</h5>

                                <p>
                                    ₹{product.priceRange.minVariantPrice.amount}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}