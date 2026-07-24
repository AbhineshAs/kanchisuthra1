import "./home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/home-banner.png";
import { useCart } from "../../context/cartContext";

const bestSellers = [
    {
        id: "b1",
        title: "Royal Golden Mustard Kanjivaram Silk Saree",
        handle: "kanjivaram-golden-mustard",
        price: 23000,
        tag: "SILK MARK CERTIFIED",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "b2",
        title: "Vermilion Crimson Red Kanjivaram Zari Saree",
        handle: "vermilion-red-kanjivaram",
        price: 28500,
        tag: "BRIDAL FAVORITE",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "b3",
        title: "Deep Emerald Green Korvai Silk Saree",
        handle: "emerald-korvai-silk",
        price: 25000,
        tag: "KORVAI HANDLOOM",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop"
    }
];

const customerReviews = [
    {
        id: "r1",
        name: "Dr. Ananya Nair",
        location: "Kochi, Kerala",
        rating: 5,
        saree: "Royal Golden Mustard Kanjivaram",
        review: "The silk quality is utterly divine. The gold zari has a soft, regal luster that looks even more breathtaking in person. Truly an heirloom piece!",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
    },
    {
        id: "r2",
        name: "Meera Ramakrishnan",
        location: "Chennai, Tamil Nadu",
        rating: 5,
        saree: "Deep Emerald Korvai Silk",
        review: "Ordered for my sister’s Muhurtham. The Korvai border interlocking is flawlessness personified. Arrived beautifully wrapped in breathable cotton packaging.",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
    },
    {
        id: "r3",
        name: "Pooja Menon",
        location: "Dubai, UAE",
        rating: 5,
        saree: "Turquoise Kanchi Silk Cotton",
        review: "Express international delivery to Dubai took just 3 days! Light, breathable, yet looks incredibly opulent. Kanchisuthra is my go-to for authentic weaves.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"
    }
];

const Home = () => {
    const { addProduct } = useCart();
    const [addedId, setAddedId] = useState(null);

    const handleQuickAdd = async (product) => {
        setAddedId(product.id);
        await addProduct(product.id);
        setTimeout(() => setAddedId(null), 1500);
    };

    return (
        <div className="home-page-attractive">

            {/* Announcement Ticker Bar */}
            <div className="announcement-marquee-bar">
                <div className="marquee-content">
                    <span>✦ 100% PURE MULBERRY SILK (SILK MARK GUARANTEED)</span>
                    <span>✦ FREE EXPRESS SHIPPING ACROSS INDIA & OVERSEAS</span>
                    <span>✦ DIRECT FROM 360+ MASTER WEAVERS IN KANCHIPURAM</span>
                    <span>✦ BESPOKE BRIDAL CONSULTATION & TAILORING AVAILABLE</span>
                    <span>✦ 100% PURE MULBERRY SILK (SILK MARK GUARANTEED)</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center text-center">
                        <div className="col-lg-9">
                            <div className="hero-glass-card">
                                <div className="hero-rating-badge">
                                    <span className="stars">★★★★★</span>
                                    <span>4.9 / 5 (2,400+ Verified Connoisseurs)</span>
                                </div>

                                <span className="hero-subtitle">
                                    THE THREAD OF KANCHI • HANDLOOM HERITAGE
                                </span>

                                <h1 className="hero-title">
                                    Woven with Memory, <br />
                                    Worn with <em>Quiet Confidence.</em>
                                </h1>

                                <p className="hero-desc-text">
                                    Curated handwoven silk & cotton masterpieces directly from Kanchipuram loom masters.
                                </p>

                                <div className="hero-btn-group">
                                    <Link to="/collection" className="btn-hero-primary">
                                        EXPLORE COLLECTIONS
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                    <Link to="/our-story" className="btn-hero-secondary">
                                        OUR STORY
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-down">
                    <i className="bi bi-chevron-down"></i>
                </div>
            </section>

            {/* Customer Value Pillars Banner */}
            <section className="value-pillars-strip">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-6">
                            <div className="pillar-item">
                                <i className="bi bi-patch-check-fill pillar-icon"></i>
                                <div>
                                    <h5>Silk Mark Certified</h5>
                                    <p>100% Pure Mulberry Silk Guaranteed</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="pillar-item">
                                <i className="bi bi-truck pillar-icon"></i>
                                <div>
                                    <h5>Express Delivery</h5>
                                    <p>Safe Global & Domestic Shipping</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="pillar-item">
                                <i className="bi bi-scissors pillar-icon"></i>
                                <div>
                                    <h5>Bespoke Stitching</h5>
                                    <p>Custom Blouse Tailoring Service</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="pillar-item">
                                <i className="bi bi-whatsapp pillar-icon"></i>
                                <div>
                                    <h5>Concierge Support</h5>
                                    <p>Direct Assistance via WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Favorite Bestsellers */}
            <section className="bestsellers-section">
                <div className="container">
                    <div className="text-center section-header-attractive mb-5">
                        <span className="sub-tag">ICONIC HANDLOOM CURATION</span>
                        <h2>Most Loved Heirlooms</h2>
                        <div className="gold-accent-line mx-auto mt-2"></div>
                    </div>

                    <div className="row g-4">
                        {bestSellers.map((item) => {
                            const isAdded = addedId === item.id;
                            return (
                                <div className="col-lg-4 col-md-6" key={item.id}>
                                    <div className="attractive-product-card">
                                        <Link to={`/product/${item.handle}`} className="card-image-link">
                                            <div className="product-img-holder">
                                                <img src={item.image} alt={item.title} className="product-main-img" />
                                                <span className="product-badge">{item.tag}</span>
                                            </div>

                                            <div className="product-details-box">
                                                <h4>{item.title}</h4>
                                                <div className="product-price">
                                                    Rs. {item.price.toLocaleString('en-IN')}.00
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="card-action-bar px-3 pb-3">
                                            <button
                                                className={`btn-add-bag-attractive ${isAdded ? "added" : ""}`}
                                                onClick={() => handleQuickAdd(item)}
                                            >
                                                <i className={`bi ${isAdded ? "bi-check-lg" : "bi-bag-plus"} me-2`}></i>
                                                {isAdded ? "ADDED TO BAG" : "ADD TO BAG"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/collection" className="btn-view-all-collections">
                            VIEW ALL HANDLOOM EDITS
                            <i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Verified Customer Love / Reviews */}
            <section className="reviews-section py-5">
                <div className="container">
                    <div className="text-center section-header-attractive mb-5">
                        <span className="sub-tag">VERIFIED REVIEWS</span>
                        <h2>Reflections of Sisterhood</h2>
                        <p className="text-muted">Read stories from women who wear Kanchisuthra with pride.</p>
                    </div>

                    <div className="row g-4">
                        {customerReviews.map((rev) => (
                            <div className="col-lg-4 col-md-6" key={rev.id}>
                                <div className="review-card">
                                    <div className="review-stars">★★★★★</div>
                                    <p className="review-text">"{rev.review}"</p>
                                    <div className="review-saree-tag">
                                        <i className="bi bi-bag-check me-1"></i> {rev.saree}
                                    </div>
                                    <div className="review-author mt-3">
                                        <img src={rev.img} alt={rev.name} className="author-avatar" />
                                        <div>
                                            <h5>{rev.name}</h5>
                                            <small>{rev.location}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visit Thrissur Studio */}
            <section className="visit-section py-5">
                <div className="container py-4">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-5 col-md-8">
                            <div className="visit-card card border-0 rounded-4 p-4 p-md-5 shadow-lg" style={{ borderTop: "4px solid #c79d67", background: "rgba(255, 255, 255, 0.96)" }}>
                                <span className="text-uppercase small fw-semibold mb-2" style={{ color: "#c79d67", letterSpacing: "2px" }}>
                                    Visit Our Studio
                                </span>

                                <h3 className="visit-card-title mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "30px", color: "#2c241c", fontWeight: "600" }}>
                                    THRISSUR FLAGSHIP STUDIO
                                </h3>

                                <p className="text-muted small mb-3">
                                    <i className="bi bi-geo-alt-fill me-2 text-dark"></i>
                                    Palace Road, Near Heritage Square,<br />
                                    Thrissur, Kerala 680001, India
                                </p>

                                <div className="border-top pt-3 mt-3">
                                    <h6 className="fw-semibold text-dark mb-2" style={{ fontSize: "13px", letterSpacing: "1px" }}>CONTACT & HOURS</h6>
                                    <p className="text-muted small mb-1"><i className="bi bi-telephone-fill me-2"></i> +91 99953 71332</p>
                                    <p className="text-muted small mb-0"><i className="bi bi-clock-fill me-2"></i> Mon – Sat: 10:00 AM – 7:30 PM</p>
                                </div>

                                <div className="visit-buttons d-flex gap-2 mt-4">
                                    <a
                                        href="https://maps.google.com/?q=Thrissur,Kerala"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-direction btn btn-dark px-4 py-2 rounded-3 text-uppercase fw-semibold"
                                        style={{ fontSize: "13px" }}
                                    >
                                        <i className="bi bi-compass me-1"></i> Directions
                                    </a>

                                    <Link
                                        to="/our-story"
                                        className="btn-store btn btn-outline-dark px-4 py-2 rounded-3 text-uppercase fw-semibold"
                                        style={{ fontSize: "13px" }}
                                    >
                                        Our Story
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 text-white ps-lg-5 d-none d-lg-block">
                            <span className="badge border text-light px-3 py-2 rounded-pill mb-3" style={{ letterSpacing: "2px", backgroundColor: "rgba(199, 157, 103, 0.3)" }}>
                                SLOW CRAFT BOUTIQUE
                            </span>
                            <h2 className="display-5 font-serif fw-bold text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                                Experience Handloom Up Close
                            </h2>
                            <p className="lead text-light opacity-75 mb-4" style={{ fontSize: "17px", lineHeight: "1.8" }}>
                                Step into our Thrissur sanctuary. Touch pure mulberry silk, view raw gold zari threads, and experience the quiet elegance of Kerala's finest curated handlooms.
                            </p>
                            <div className="d-flex gap-4 pt-2">
                                <div>
                                    <h4 className="fw-bold mb-0" style={{ color: "#c79d67" }}>100%</h4>
                                    <small className="opacity-75">Pure Handloom Silk</small>
                                </div>
                                <div className="border-start border-secondary ps-4">
                                    <h4 className="fw-bold mb-0" style={{ color: "#c79d67" }}>360+</h4>
                                    <small className="opacity-75">Artisan Families</small>
                                </div>
                                <div className="border-start border-secondary ps-4">
                                    <h4 className="fw-bold mb-0" style={{ color: "#c79d67" }}>Bespoke</h4>
                                    <small className="opacity-75">Bridal Consultations</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;