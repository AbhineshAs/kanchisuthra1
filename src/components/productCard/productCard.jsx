import "./productCard.css";

export default function ProductCard({ product }) {
    return (
        <div className="product-card">

            <img
                src={product.featuredImage?.url}
                alt={product.title}
            />

            <h4>{product.title}</h4>

            <p>
                ₹ {product.priceRange.minVariantPrice.amount}
            </p>

        </div>
    );
}