import "./product.css";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { shopifyFetch } from "../../api/shopify";
import { useCart } from "../../context/cartContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { getProductByHandle } from "../../data/productCatalog";

export default function Product() {
    const { handle } = useParams();
    const navigate = useNavigate();

    const { addProduct } = useCart();

    const [product, setProduct] = useState(null);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const [selectedVariant, setSelectedVariant] = useState(null);

    useEffect(() => {
        async function loadProduct() {
            const query = `
            query($handle:String!){
                product(handle:$handle){
                    id
                    title
                    descriptionHtml
                    images(first:20){
                        nodes{
                            id
                            url
                        }
                    }
                    variants(first:20){
                        nodes{
                            id
                            title
                            availableForSale
                            price{
                                amount
                            }
                        }
                    }
                }
            }`;

            try {
                const data = await shopifyFetch(query, { handle });
                let productData = data?.data?.product || null;

                if (!productData) {
                    const catItem = getProductByHandle(handle);
                    productData = {
                        id: catItem.id,
                        title: catItem.title,
                        descriptionHtml: catItem.descriptionHtml,
                        images: {
                            nodes: catItem.images.map((url, idx) => ({ id: `img-${idx}`, url }))
                        },
                        variants: {
                            nodes: [
                                {
                                    id: catItem.id,
                                    title: "Default",
                                    availableForSale: true,
                                    price: { amount: catItem.price }
                                }
                            ]
                        }
                    };
                }

                setProduct(productData);

                if (productData?.variants?.nodes?.length) {
                    setSelectedVariant(productData.variants.nodes[0]);
                }
            } catch (err) {
                console.error("Error loading product:", err);
                const catItem = getProductByHandle(handle);
                const fallbackData = {
                    id: catItem.id,
                    title: catItem.title,
                    descriptionHtml: catItem.descriptionHtml,
                    images: {
                        nodes: catItem.images.map((url, idx) => ({ id: `img-${idx}`, url }))
                    },
                    variants: {
                        nodes: [
                            {
                                id: catItem.id,
                                title: "Default",
                                availableForSale: true,
                                price: { amount: catItem.price }
                            }
                        ]
                    }
                };
                setProduct(fallbackData);
                setSelectedVariant(fallbackData.variants.nodes[0]);
            }
        }

        loadProduct();
    }, [handle]);

    if (!product) {

        return (
            <div className="container py-5 text-center">

                <h2>Loading...</h2>

            </div>
        );

    }

    async function handleAddToCart() {
        if (!selectedVariant) return;

        for (let i = 0; i < quantity; i++) {
            await addProduct(selectedVariant.id, i === quantity - 1);
        }
    }

    async function handleBuyNow() {
        await handleAddToCart();
        navigate("/checkout");
    }

    return (

        <section className="product-page">

            <div className="container">

                <div className="row">

                    {/* LEFT */}

                    <div className="col-lg-6">

                        <Swiper
                            modules={[Navigation, Thumbs]}
                            navigation
                            thumbs={{
                                swiper:
                                    thumbsSwiper &&
                                        !thumbsSwiper.destroyed
                                        ? thumbsSwiper
                                        : null,
                            }}
                            className="product-main-slider"
                        >

                            {product.images.nodes.map((image) => (

                                <SwiperSlide key={image.id}>

                                    <img
                                        src={image.url}
                                        alt={product.title}
                                    />

                                </SwiperSlide>

                            ))}

                        </Swiper>

                        <Swiper
                            modules={[Thumbs]}
                            watchSlidesProgress
                            spaceBetween={12}
                            slidesPerView={4}
                            onSwiper={setThumbsSwiper}
                            className="product-thumb-slider"
                        >

                            {product.images.nodes.map((image) => (

                                <SwiperSlide key={image.id}>

                                    <img
                                        src={image.url}
                                        alt=""
                                    />

                                </SwiperSlide>

                            ))}

                        </Swiper>

                    </div>

                    {/* RIGHT */}

                    <div className="col-lg-6">

                        <div className="product-details">

                            <h1>
                                {product.title}
                            </h1>

                            <h2>

                                ₹
                                {selectedVariant?.price.amount}

                            </h2>

                            <div
                                className="product-description"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        product.descriptionHtml,
                                }}
                            />

                            {/* Variant */}

                            {product.variants.nodes.length > 1 && (

                                <div className="mt-4">

                                    <label>
                                        Variant
                                    </label>

                                    <select
                                        className="form-select"
                                        value={selectedVariant?.id}
                                        onChange={(e) => {

                                            const variant =
                                                product.variants.nodes.find(
                                                    (v) =>
                                                        v.id ===
                                                        e.target.value
                                                );

                                            setSelectedVariant(variant);

                                        }}
                                    >

                                        {product.variants.nodes.map(
                                            (variant) => (

                                                <option
                                                    key={variant.id}
                                                    value={variant.id}
                                                >

                                                    {variant.title}

                                                </option>

                                            )
                                        )}

                                    </select>

                                </div>

                            )}

                            {/* Quantity */}

                            <div className="quantity-box mt-4">

                                <button
                                    onClick={() =>
                                        quantity > 1 &&
                                        setQuantity(quantity - 1)
                                    }
                                >
                                    -
                                </button>

                                <span>

                                    {quantity}

                                </span>

                                <button
                                    onClick={() =>
                                        setQuantity(quantity + 1)
                                    }
                                >
                                    +
                                </button>

                            </div>

                            {/* Buttons */}

                            <div className="product-buttons">

                                <button
                                    className="add-cart-btn"
                                    onClick={handleAddToCart}
                                >
                                    Add To Cart
                                </button>

                                <button
                                    className="buy-btn"
                                    onClick={handleBuyNow}
                                >
                                    Buy Now
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}