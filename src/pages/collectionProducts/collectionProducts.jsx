import { useEffect, useState } from "react";
import { shopifyFetch } from "../../api/shopify";
import { useCart } from "../../context/cartContext";
import { Link, useParams } from "react-router-dom";
import "./collectionProducts.css";
import praveshBanner from "../../assets/images/pravesh.png";
import nithyaBanner from "../../assets/images/nithya.png";
import saarBanner from "../../assets/images/saar.png";
import muhurtaBanner from "../../assets/images/muhurta.png";

const categoryDetailsMap = {
    "kanchivaram-silk": {
        title: "Kanchivaram Silks",
        descriptionHtml: "Our <strong>Kanchivaram sarees</strong> are celebrated for their <strong>lustrous texture, intricate motifs, and contrasting borders</strong>, inspired by temple architecture, nature, and traditional artistry. Crafted using the <strong>Korvai weaving technique</strong>, the body and border are woven separately and interlocked with precision, ensuring a <strong>strong structure, graceful drape, and long-lasting durability</strong>.",
        fallbackProducts: [
            { id: "k1", title: "Royal Golden Mustard Kanjivaram Silk Saree", handle: "kanjivaram-golden-mustard", price: 23000, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" },
            { id: "k2", title: "Vermilion Crimson Red Kanjivaram Zari Saree", handle: "vermilion-red-kanjivaram", price: 28500, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop" },
            { id: "k3", title: "Deep Emerald Green Korvai Silk Saree", handle: "emerald-korvai-silk", price: 25000, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop" },
            { id: "k4", title: "Midnight Purple Gold Zari Kanjivaram", handle: "midnight-purple-kanjivaram", price: 31000, image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop" },
            { id: "k5", title: "Subtle Cream & Gold Korvai Silk Saree", handle: "cream-gold-korvai-silk", price: 24000, image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=800&auto=format&fit=crop" },
            { id: "k6", title: "Peacock Blue Heritage Kanjivaram Saree", handle: "peacock-blue-kanjivaram", price: 27500, image: "https://images.unsplash.com/photo-1606760227091-3dd850d492a6?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    "kanchi-silk-cotton": {
        title: "Kanchi Silk Cotton",
        descriptionHtml: "Handwoven in Kanchipuram, our <strong>Kanchi Silk Cotton sarees</strong> feature <strong>traditional temple zari borders on a soft, breathable silk-cotton blend body</strong>, combining the subtle luster of mulberry silk with all-day wearing comfort.",
        fallbackProducts: [
            { id: "ksc1", title: "Turquoise Temple Border Kanchi Silk Cotton", handle: "turquoise-kanchi-silk-cotton", price: 9800, image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=800&auto=format&fit=crop" },
            { id: "ksc2", title: "Mustard Gold Traditional Kanchi Silk Cotton", handle: "kanchi-silk-cotton-mustard", price: 8500, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    "kotta-silk-cotton": {
        title: "Kotta Silk Cotton",
        descriptionHtml: "Characterized by <strong>translucent square check weaves and airy lightness</strong>, our <strong>Kotta Silk Cotton collection</strong> pairs delicate silk shimmer with cooling cotton yarn for effortless summer celebrations.",
        fallbackProducts: [
            { id: "kt1", title: "Coral Pink Kotta Silk Cotton Checkered Saree", handle: "coral-kotta-silk-cotton", price: 8900, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" },
            { id: "kt2", title: "Pastel Mint Kotta Silk Cotton Saree", handle: "kotta-silk-cotton-pink", price: 9200, image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    "kanchi-cotton": {
        title: "Kanchi Cotton",
        descriptionHtml: "Woven on traditional handlooms in Kanchipuram, <strong>Kanchi Cotton sarees</strong> showcase <strong>heavy contrast zari borders and sacred temple motifs</strong>, delivering regal Kanjivaram dignity in lightweight, crisp cotton.",
        fallbackProducts: [
            { id: "kc1", title: "Crimson Red Kanchi Cotton Temple Saree", handle: "crimson-kanchi-cotton", price: 5800, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop" },
            { id: "kc2", title: "Crisp Emerald Green Kanchi Cotton Border Saree", handle: "crisp-kanchi-cotton", price: 5400, image: "https://images.unsplash.com/photo-1606760227091-3dd850d492a6?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    "kotta-cotton": {
        title: "Kotta Cotton",
        descriptionHtml: "Crafted with <strong>delicate lattice checks and soothing natural yarn</strong>, our <strong>Kotta Cotton sarees</strong> offer supreme breathability, soft drape, and quiet elegance for daily rituals.",
        fallbackProducts: [
            { id: "ktc1", title: "Soft Lavender Kotta Cotton Handloom Saree", handle: "lavender-kotta-cotton", price: 4600, image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop" },
            { id: "ktc2", title: "Fine Summer Check Kotta Cotton Saree", handle: "kotta-cotton-summer-saree", price: 4800, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    "pravesh": {
        title: "Pravesh",
        banner: praveshBanner,
        subtitle: "Our Pravesh Festive Edit brings together vibrant ceremonial hues, rich contrast borders, and radiant zari accents, created to grace housewarmings, family gatherings, and joyful celebrations.",
        descriptionHtml: "Our <strong>Pravesh Festive Edit</strong> brings together <strong>vibrant ceremonial hues, rich contrast borders, and radiant zari accents</strong>, created to grace housewarmings, family gatherings, and joyful celebrations.",
        fallbackProducts: [
            { id: "pr1", title: "Festive Emerald & Ruby Silk Saree", handle: "festive-emerald-ruby-silk", price: 22000, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop" },
            { id: "pr2", title: "Radiant Gold Zari Pravesh Festive Silk", handle: "maroon-komarapalayam-silk", price: 24500, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    "nithya": {
        title: "Nithya",
        banner: nithyaBanner,
        subtitle: "Designed for effortless everyday wear, the Nithya Edit features breathable handloom textures, lightweight silk-cotton weaves, and subtle borders for quiet daily confidence.",
        descriptionHtml: "Designed for effortless everyday wear, the <strong>Nithya Edit</strong> features <strong>breathable handloom textures, lightweight silk-cotton weaves, and subtle borders</strong> for quiet daily confidence.",
        fallbackProducts: [
            { id: "n1", title: "Nithya Everyday Soft Silk Cotton Saree", handle: "pratidina-daily-silk-cotton", price: 7800, image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop" },
            { id: "n2", title: "Nithya Soothing Handspun Cotton Saree", handle: "natural-handspun-cotton", price: 6800, image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    "saar": {
        title: "Saar",
        banner: saarBanner,
        subtitle: "The Saar Special Edit highlights rare archival motifs, experimental color pairings, and limited-edition weaves crafted by master loom artists for true textile connoisseurs.",
        descriptionHtml: "The <strong>Saar Special Edit</strong> highlights <strong>rare archival motifs, experimental color pairings, and limited-edition weaves</strong> crafted by master loom artists for true textile connoisseurs.",
        fallbackProducts: [
            { id: "sr1", title: "Saar Limited Masterpiece Kanjivaram", handle: "saar-limited-masterpiece-kanjivaram", price: 42000, image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    "muhurta": {
        title: "Muhurta",
        banner: muhurtaBanner,
        subtitle: "Our Muhurta Bridal Edit features sacred gold zari work, traditional Korvai interlocking, and regal ceremonial silk, curated to illuminate your most sacred wedding milestones..",
        descriptionHtml: "Our <strong>Muhurta Bridal Edit</strong> features <strong>sacred gold zari work, traditional Korvai interlocking, and regal ceremonial silk</strong>, curated to illuminate your most sacred wedding milestones.",
        fallbackProducts: [
            { id: "m1", title: "Regal Gold Zari Muhurta Bridal Kanjivaram", handle: "regal-gold-muhurta-kanjivaram", price: 34000, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" },
            { id: "m2", title: "Deep Vermilion Sacred Flame Bridal Silk", handle: "vermilion-sacred-bridal-silk", price: 38000, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop" }
        ]
    }
};

export default function CollectionProducts() {
    const { handle } = useParams();
    const { addProduct } = useCart();
    const [collection, setCollection] = useState(null);
    const [loading, setLoading] = useState(true);
    const [addedId, setAddedId] = useState(null);

    // Filters & Sorting state matching Neela design
    const [sortBy, setSortBy] = useState("best-selling");
    const [showAvailabilityFilter, setShowAvailabilityFilter] = useState(false);
    const [showPriceFilter, setShowPriceFilter] = useState(false);
    const [inStockOnly, setInStockOnly] = useState(false);

    const activeMeta = categoryDetailsMap[handle] || {
        title: handle ? handle.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "Curated Collection",
        descriptionHtml: "Discover our handwoven heritage collection, crafted by master artisans with pure silk threads, delicate gold zari, and timeless elegance.",
        fallbackProducts: [
            { id: "f1", title: "Kanjivaram Silk Saree", handle: "kanjivaram-silk-saree", price: 23000, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" },
            { id: "f2", title: "Organza Silk Saree", handle: "organza-silk-saree", price: 18500, image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop" },
            { id: "f3", title: "Tissue Silk Saree", handle: "tissue-silk-saree", price: 26000, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop" }
        ]
    };
    const isOccasion = ["pravesh", "nithya", "saar", "muhurta"].includes(handle);
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
                if (data?.data?.collection) {
                    setCollection(data.data.collection);
                } else {
                    setCollection(null);
                }
            } catch (error) {
                console.error("Error loading collection from Shopify:", error);
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

    // Determine products to display ONLY from actual database
    const rawProducts = collection?.products?.nodes || [];

    // Sorting logic
    let displayedProducts = [...rawProducts];
    if (sortBy === "price-low-high") {
        displayedProducts.sort((a, b) => Number(a.priceRange.minVariantPrice.amount) - Number(b.priceRange.minVariantPrice.amount));
    } else if (sortBy === "price-high-low") {
        displayedProducts.sort((a, b) => Number(b.priceRange.minVariantPrice.amount) - Number(a.priceRange.minVariantPrice.amount));
    } else if (sortBy === "title-a-z") {
        displayedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    const titleText = collection?.title || activeMeta.title;
    const descriptionContent = activeMeta.descriptionHtml || collection?.description;

    return (
        <div className="collection-detail-page py-5">
            <div className="container">

                {/* Left-Aligned Header Matching Screenshot */}
                {/* <div className="collection-detail-header mb-4">
                    <h1 className="collection-detail-title mb-3">
                        {titleText}
                    </h1>

                    {descriptionContent && (
                        <p
                            className="collection-detail-desc"
                            dangerouslySetInnerHTML={{ __html: descriptionContent }}
                        />
                    )}
                </div> */}
                {isOccasion ? (

                    <section className="occasion-banner">

                        <img
                            src={activeMeta.banner}
                            alt={titleText}
                            className="occasion-banner-image"
                        />

                        <div className="occasion-banner-overlay">

                            <div className="occasion-banner-content">

                                <h1>{titleText}</h1>

                                <p>{activeMeta.subtitle}</p>

                            </div>

                        </div>

                    </section>

                ) : (

                    <div className="collection-detail-header mb-4">

                        <h1 className="collection-detail-title">
                            {titleText}
                        </h1>

                        <p
                            className="collection-detail-desc"
                            dangerouslySetInnerHTML={{
                                __html: descriptionContent
                            }}
                        />

                    </div>

                )}
                {/* Filter and Sort Bar Matching Screenshot */}
                <div className="collection-filter-bar mb-4">
                    {/* Desktop Filter Controls */}
                    <div className="filter-left-group d-none d-md-flex">
                        <span className="filter-label">Filter:</span>

                        <div className="filter-dropdown-wrapper">
                            <button
                                className="filter-btn"
                                onClick={() => setShowAvailabilityFilter(!showAvailabilityFilter)}
                            >
                                Availability <i className="bi bi-chevron-down ms-1"></i>
                            </button>

                            {showAvailabilityFilter && (
                                <div className="filter-popover">
                                    <label className="form-check-label d-flex align-items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={inStockOnly}
                                            onChange={(e) => setInStockOnly(e.target.checked)}
                                        />
                                        <span>In Stock Only</span>
                                    </label>
                                </div>
                            )}
                        </div>

                        <div className="filter-dropdown-wrapper">
                            <button
                                className="filter-btn"
                                onClick={() => setShowPriceFilter(!showPriceFilter)}
                            >
                                Price <i className="bi bi-chevron-down ms-1"></i>
                            </button>

                            {showPriceFilter && (
                                <div className="filter-popover p-3" style={{ minWidth: "220px" }}>
                                    <span className="d-block small text-muted mb-2">Filter by Price</span>
                                    <div className="d-flex align-items-center gap-2">
                                        <button
                                            className="btn btn-sm btn-outline-dark w-100"
                                            onClick={() => setSortBy("price-low-high")}
                                        >
                                            Low to High
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-dark w-100"
                                            onClick={() => setSortBy("price-high-low")}
                                        >
                                            High to Low
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Filter & Sort Button Matching Screenshot 100% */}
                    <div className="mobile-filter-group d-md-none">
                        <button
                            className="mobile-filter-btn"
                            onClick={() => setShowPriceFilter(!showPriceFilter)}
                        >
                            <i className="bi bi-sliders me-2"></i>
                            Filter and sort
                        </button>

                        {showPriceFilter && (
                            <div className="mobile-filter-drawer-popover p-3">
                                <span className="d-block small text-muted mb-2 fw-bold">Sort Products</span>
                                <select
                                    className="form-select form-select-sm mb-3"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="best-selling">Best selling</option>
                                    <option value="price-low-high">Price, low to high</option>
                                    <option value="price-high-low">Price, high to low</option>
                                    <option value="title-a-z">Alphabetically, A-Z</option>
                                </select>
                                <label className="form-check-label d-flex align-items-center gap-2 cursor-pointer small">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={inStockOnly}
                                        onChange={(e) => setInStockOnly(e.target.checked)}
                                    />
                                    <span>In Stock Only</span>
                                </label>
                            </div>
                        )}
                    </div>

                    <div className="filter-right-group">
                        <div className="sort-by-wrapper d-none d-md-flex">
                            <span className="sort-label">Sort by:</span>
                            <select
                                className="sort-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="best-selling">Best selling</option>
                                <option value="price-low-high">Price, low to high</option>
                                <option value="price-high-low">Price, high to low</option>
                                <option value="title-a-z">Alphabetically, A-Z</option>
                            </select>
                        </div>

                        <span className="product-count-label">
                            {displayedProducts.length} {displayedProducts.length === 1 ? "product" : "products"}
                        </span>
                    </div>
                </div>

                {/* Product Grid or Coming Soon State */}
                {loading ? (
                    <div className="py-5 text-center">
                        <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : displayedProducts.length > 0 ? (
                    <div className="row g-3 g-md-4">
                        {displayedProducts.map((product) => {
                            const variantId = product.variants?.nodes?.[0]?.id || product.id;
                            const isAdded = addedId === product.id;

                            return (
                                <div className="col-6 col-lg-4" key={product.id}>
                                    <div className="neela-product-card">
                                        <Link to={`/product/${product.handle}`} className="neela-product-link">
                                            <div className="neela-img-wrapper">
                                                <img
                                                    src={product.featuredImage?.url || "https://via.placeholder.com/400x530"}
                                                    alt={product.title}
                                                    className="neela-product-img"
                                                />
                                            </div>

                                            <div className="neela-product-info">
                                                <h3 className="neela-product-title">{product.title}</h3>
                                                <div className="neela-product-price">
                                                    Rs. {Number(product.priceRange.minVariantPrice.amount).toLocaleString('en-IN')}.00
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="neela-card-action px-3 pb-3">
                                            <button
                                                className={`neela-add-btn ${isAdded ? "added" : ""}`}
                                                onClick={() => handleAddToCart(variantId, product.id)}
                                            >
                                                {isAdded ? "ADDED TO BAG" : "ADD TO BAG"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* Elegant Luxury Coming Soon Block when database has no products for this collection */
                    <div className="coming-soon-wrapper text-center py-5">
                        <div className="coming-soon-card">
                            <span className="coming-soon-tag">CURATED HERITAGE</span>
                            <h2 className="coming-soon-heading">Coming Soon</h2>
                            <div className="gold-accent-divider mx-auto my-3"></div>
                            <p className="coming-soon-text mx-auto">
                                Our master weavers in Kanchipuram are currently hand-looming exclusive new pieces for this edition. Enter your email below to receive early notification when this collection launches.
                            </p>
                            <form className="coming-soon-form mx-auto mt-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! You will be notified when new products arrive."); }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="coming-soon-input"
                                    required
                                />
                                <button type="submit" className="coming-soon-submit-btn">
                                    NOTIFY ME
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}