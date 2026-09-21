import "./home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import hero1 from "../../assets/herosection/DSC07269.JPG";
import hero2 from "../../assets/herosection/DSC07273.JPG";
import hero3 from "../../assets/images/DSC07669.JPG";

import newArrival1 from "../../assets/herosection/DSC07343.JPG";
import newArrival2 from "../../assets/herosection/DSC07384.JPG";
import newArrival3 from "../../assets/herosection/DSC07425.JPG";

import instaImg from "../../assets/herosection/DSC07469.JPG";
import museImg from "../../assets/images/orange.JPG";
import heritageImg from "../../assets/images/ELF14DSC04394.JPG";

import know1 from "../../assets/herosection/DSC07814.JPG";
import know2 from "../../assets/herosection/DSC08265.JPG";
import know3 from "../../assets/herosection/DSC07938.JPG";

import studioBg from "../../assets/herosection/DSC08078.JPG";

const heroSlides = [
    {
        image: hero1,
        title: "KANCHISUTHRA",
        subtitle: "WOVEN WITH MEMORY, WORN WITH QUIET CONFIDENCE,",
        btnText: "EXPLORE COLLECTION",
        link: "/collection"
    },
    {
        image: hero2,
        title: "KANJIVARAM SILKS",
        subtitle: "SACRED GOLD ZARI & TIMELESS KERALA ELEGANCE,",
        btnText: "DISCOVER SILK EDITS",
        link: "/collection/kanchivaram-silk"
    },
    {
        image: hero3,
        title: "HANDLOOM HERITAGE",
        subtitle: "AN UNBROKEN BOND FROM LOOM TO YOUR HANDS,",
        btnText: "READ OUR STORY",
        link: "/our-story"
    }
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleSlideChange((currentSlide + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const handleSlideChange = (newIndex) => {
        if (isAnimating || newIndex === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(newIndex);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const nextSlide = () => {
        handleSlideChange((currentSlide + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        handleSlideChange((currentSlide - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <div className="home-page-wrapper">
            {/* Hero Section Slider (Exact Silkyway.life Style) */}
            <section className="silkyway-hero">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`silkyway-slide ${index === currentSlide ? "active" : ""}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}

                <div className="silkyway-overlay"></div>

                {/* Left & Right Edge SVG Arrows */}
                <button className="silkyway-arrow prev-arrow" onClick={prevSlide} aria-label="Previous Slide">
                    <svg width="24" height="48" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="18 6 6 24 18 42"></polyline>
                    </svg>
                </button>
                <button className="silkyway-arrow next-arrow" onClick={nextSlide} aria-label="Next Slide">
                    <svg width="24" height="48" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="6 6 18 24 6 42"></polyline>
                    </svg>
                </button>

                <div className="silkyway-container">
                    <div className="silkyway-content">
                        <h1 className="silkyway-title">
                            {heroSlides[currentSlide].title}
                        </h1>

                        <p className="silkyway-subtitle">
                            {heroSlides[currentSlide].subtitle}
                        </p>

                        <div className="silkyway-btn-wrapper">
                            <Link
                                to={heroSlides[currentSlide].link}
                                className="silkyway-btn text-decoration-none"
                            >
                                {heroSlides[currentSlide].btnText}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Minimalist Bottom Dots */}
                <div className="silkyway-dots">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            className={`silkyway-dot ${idx === currentSlide ? "active" : ""}`}
                            onClick={() => handleSlideChange(idx)}
                            aria-label={`Slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Featured Section */}
            <section className="featured-section">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-eyebrow">CURATED SILK EDITS</span>
                        <h2 className="featured-heading">
                            A Celebration of Handloom & Heritage
                        </h2>

                        <div className="luxury-divider">
                            <span className="line"></span>
                            <span className="motif">❖</span>
                            <span className="line"></span>
                        </div>

                        <p className="featured-text">
                            "A handloom saree is never just fabric. It carries the memory of the hands that wove it, the tradition of its origin, and the story of every woman who wears it."
                        </p>
                    </div>

                    <div className="row g-4 align-items-stretch">
                        <div className="col-md-4">
                            <div className="product-card-wrapper">
                                <Link to="/collection" className="product-card d-block text-decoration-none">
                                    <div className="product-img-box">
                                        <img src={newArrival1} alt="Cream Kanjivaram" />
                                        <span className="product-badge">NEW ARRIVAL</span>
                                        <div className="product-overlay-actions">
                                            <span className="quick-view-btn">
                                                <i className="bi bi-eye-fill me-1"></i> Quick View
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-card-body">
                                        <div className="product-rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span className="rating-count">(4.9)</span>
                                        </div>
                                        <h4 className="product-title">Cream Kanjivaram</h4>
                                        <p className="product-subtitle">Pure Mulberry Silk • Gold Zari Border</p>
                                        <div className="product-price-box">
                                            <span className="product-price">Rs. 27,000.00</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="product-card-wrapper featured-center">
                                <Link to="/collection" className="product-card center-card d-block text-decoration-none">
                                    <div className="product-img-box">
                                        <img src={newArrival2} alt="Vermilion Red" />
                                        <span className="product-badge gold-badge">ICONIC COLLECTION</span>
                                        <div className="product-overlay-actions">
                                            <span className="quick-view-btn">
                                                <i className="bi bi-eye-fill me-1"></i> Quick View
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-card-body">
                                        <div className="product-rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span className="rating-count">(5.0)</span>
                                        </div>
                                        <h4 className="product-title">Vermilion Red</h4>
                                        <p className="product-subtitle">Bridal Sacred Silk • Traditional Weave</p>
                                        <div className="product-price-box">
                                            <span className="product-price">Rs. 27,000.00</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="product-card-wrapper">
                                <Link to="/collection" className="product-card d-block text-decoration-none">
                                    <div className="product-img-box">
                                        <img src={newArrival3} alt="Ivory Kanchi Organza" />
                                        <span className="product-badge">SIGNATURE SERIES</span>
                                        <div className="product-overlay-actions">
                                            <span className="quick-view-btn">
                                                <i className="bi bi-eye-fill me-1"></i> Quick View
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-card-body">
                                        <div className="product-rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                            <span className="rating-count">(4.8)</span>
                                        </div>
                                        <h4 className="product-title">Ivory Kanchi Organza</h4>
                                        <p className="product-subtitle">Translucent Kanchi • Zari Motifs</p>
                                        <div className="product-price-box">
                                            <span className="product-price">Rs. 24,000.00</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/collection" className="luxury-cta-btn d-inline-flex align-items-center gap-2 text-decoration-none">
                            <span>VIEW ALL NEW ARRIVALS</span>
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="instagram-section">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="instagram-image-container">
                                <div className="instagram-image-frame">
                                    <img
                                        src={instaImg}
                                        alt="Community Highlight"
                                        className="img-fluid"
                                    />
                                    <div className="insta-floating-badge">
                                        <i className="bi bi-instagram text-gold me-2"></i>
                                        <div>
                                            <strong>100K+ Saree Enthusiasts</strong>
                                            <small className="d-block text-muted">@kanchisuthra • Daily Drops</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="instagram-content">
                                <span className="section-eyebrow">OUR INSTAGRAM COMMUNITY</span>
                                <h2>
                                    Where the <span>Story</span> Continues
                                </h2>

                                <p>
                                    Join 100K+ saree lovers on Instagram for daily drops,
                                    exclusive edits, artisan stories, or simply to chat
                                    with us about all things silk. Every thread has a tale
                                    to tell.
                                </p>

                                <div className="insta-highlights-grid mb-4">
                                    <div className="insta-pill">
                                        <i className="bi bi-award me-2 text-gold"></i>
                                        <span>Artisan Stories</span>
                                    </div>
                                    <div className="insta-pill">
                                        <i className="bi bi-sparkles me-2 text-gold"></i>
                                        <span>Exclusive Edits</span>
                                    </div>
                                    <div className="insta-pill">
                                        <i className="bi bi-heart me-2 text-gold"></i>
                                        <span>Client Drapes</span>
                                    </div>
                                </div>

                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="instagram-btn d-inline-flex align-items-center gap-2 text-decoration-none"
                                >
                                    <i className="bi bi-instagram me-1"></i>
                                    <span>FOLLOW US ON INSTAGRAM</span>
                                    <i className="bi bi-box-arrow-up-right ms-1 small"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="section-eyebrow">PATRON REFLECTIONS</span>
                        <h2 className="section-title">Customer Love & Reflections</h2>
                        <div className="luxury-divider">
                            <span className="line"></span>
                            <span className="motif">❖</span>
                            <span className="line"></span>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="row align-items-center g-4">
                            <div className="col-lg-4 text-center">
                                <div className="customer-img-wrapper">
                                    <img
                                        src={museImg}
                                        alt="Client Story"
                                        className="customer-img"
                                    />
                                    <div className="verified-badge">
                                        <i className="bi bi-patch-check-fill text-gold me-1"></i> Verified Patron
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="quote-box">
                                    <div className="quote-icon">
                                        <i className="bi bi-quote"></i>
                                    </div>

                                    <div className="star-rating mb-3">
                                        <i className="bi bi-star-fill text-gold"></i>
                                        <i className="bi bi-star-fill text-gold"></i>
                                        <i className="bi bi-star-fill text-gold"></i>
                                        <i className="bi bi-star-fill text-gold"></i>
                                        <i className="bi bi-star-fill text-gold"></i>
                                    </div>

                                    <h3 className="testimonial-text">
                                        "A Kanchisuthra saree is never just fabric. Slipping into one carries the memory of master weaver hands and the quiet confidence of pure heritage."
                                    </h3>

                                    <div className="customer-name">
                                        <span className="gold-line"></span>
                                        <div className="name-details">
                                            <strong>MODERN KERALA MUSE</strong>
                                            <small className="d-block text-gold">HERITAGE SILK COLLECTOR</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Heritage Section */}
            <section className="heritage-section">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <div className="heritage-content">
                                <span className="section-eyebrow">OUR ORIGIN STORY</span>
                                <h2>
                                    The Unbroken Thread of Heritage & Sisterhood.
                                </h2>

                                <p className="heritage-intro">
                                    Founded in Thrissur, Kerala, by sisters Greeshma and Dr. Lakshmi, Kanchisuthra was born from a shared belief: a handloom saree is a living archive. It carries the memory of the hands that wove it and the story of every woman who wears it.
                                </p>

                                <p>
                                    The name <em>Kanchisuthra</em> means the sacred thread of Kanchi — an unbroken bond connecting the master weaver's wooden loom directly to your hands. We choose small, considered quantities and slow craft over volume.
                                </p>

                                <div className="heritage-stats-row my-4">
                                    <div className="stat-item">
                                        <h4 className="stat-number">2019</h4>
                                        <span className="stat-desc">Established in Thrissur</span>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat-item">
                                        <h4 className="stat-number">360+</h4>
                                        <span className="stat-desc">Artisan Families</span>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat-item">
                                        <h4 className="stat-number">100%</h4>
                                        <span className="stat-desc">Slow Craft Guarantee</span>
                                    </div>
                                </div>

                                <Link to="/our-story" className="heritage-btn">
                                    <span>READ THE KANCHISUTHRA STORY</span>
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-7 text-center">
                            <div className="heritage-image-wrapper">
                                <img
                                    src={heritageImg}
                                    alt="Heritage"
                                    className="heritage-image"
                                />
                                <div className="heritage-frame-accent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge Section */}
            <section className="knowledge-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="section-eyebrow">CONNOISSEUR'S GUIDE</span>
                        <h2 className="knowledge-title">Know Your Kanchisuthra</h2>
                        <div className="luxury-divider">
                            <span className="line"></span>
                            <span className="motif">❖</span>
                            <span className="line"></span>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="knowledge-card">
                                <div className="knowledge-img-box">
                                    <img
                                        src={know1}
                                        alt="The Silks We Weave"
                                        className="img-fluid"
                                    />
                                    <span className="read-time-tag">4 MIN READ</span>
                                </div>

                                <div className="knowledge-content">
                                    <h3>The Silks We Weave</h3>
                                    <p>
                                        A tribute to time, tradition, and touch. Discover the intricate
                                        details of Kanjivaram and Banarasi weaving.
                                    </p>
                                    <Link to="/fabrics" className="read-more-link">
                                        <span>READ MORE</span>
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="knowledge-card">
                                <div className="knowledge-img-box">
                                    <img
                                        src={know2}
                                        alt="Silk Saree After Care"
                                        className="img-fluid"
                                    />
                                    <span className="read-time-tag">3 MIN READ</span>
                                </div>

                                <div className="knowledge-content">
                                    <h3>Silk Saree After Care</h3>
                                    <p>
                                        Elegance maintained. Learn the professional secrets to keeping
                                        your heritage pieces pristine.
                                    </p>
                                    <Link to="/craftsmanship" className="read-more-link">
                                        <span>KNOW MORE</span>
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mx-md-auto">
                            <div className="knowledge-card">
                                <div className="knowledge-img-box">
                                    <img
                                        src={know3}
                                        alt="Understanding Silk"
                                        className="img-fluid"
                                    />
                                    <span className="read-time-tag">5 MIN READ</span>
                                </div>

                                <div className="knowledge-content">
                                    <h3>Understanding Silk</h3>
                                    <p>
                                        A connoisseur's guide to India's finest weaves. From thread counts
                                        to zari purity, learn it all.
                                    </p>
                                    <Link to="/heritage" className="read-more-link">
                                        <span>READ MORE</span>
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visit Section */}
            <section
                className="visit-section py-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(18, 13, 9, 0.65), rgba(18, 13, 9, 0.75)), url(${studioBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="container py-4">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-5 col-md-8">
                            <div className="visit-card card border-0 rounded-4 p-4 p-md-5 shadow-lg">
                                <div className="visit-crest mb-2">❖ FLAGSHIP SANCTUARY</div>
                                <span className="visit-subhead text-uppercase small fw-semibold mb-2">
                                    Visit Our Studio
                                </span>

                                <h3 className="visit-card-title mb-3">
                                    THRISSUR FLAGSHIP STUDIO
                                </h3>

                                <p className="address-text mb-3">
                                    <i className="bi bi-geo-alt-fill me-2 text-gold"></i>
                                    Palace Road, Near Heritage Square,<br />
                                    Thrissur, Kerala 680001, India
                                </p>

                                <div className="hours-box border-top border-gold-light pt-3 mt-3">
                                    <h6 className="hours-title text-uppercase fw-semibold mb-2">CONTACT & HOURS</h6>
                                    <p className="small mb-1"><i className="bi bi-telephone-fill me-2 text-gold"></i> +91 99953 71332</p>
                                    <p className="small mb-0"><i className="bi bi-clock-fill me-2 text-gold"></i> Mon – Sat: 10:00 AM – 7:30 PM</p>
                                </div>

                                <div className="visit-buttons d-flex gap-2 mt-4">
                                    <a
                                        href="https://maps.google.com/?q=Thrissur,Kerala"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-direction btn px-4 py-2 rounded-3 text-uppercase fw-semibold"
                                    >
                                        <i className="bi bi-compass me-1"></i> Directions
                                    </a>

                                    <Link
                                        to="/our-story"
                                        className="btn-store btn btn-outline-dark px-4 py-2 rounded-3 text-uppercase fw-semibold"
                                    >
                                        Our Story
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 ps-lg-5 d-none d-lg-block text-white">
                            <span className="studio-pill mb-3 d-inline-block">
                                SLOW CRAFT BOUTIQUE • THRISSUR
                            </span>
                            <h2 className="display-5 fw-bold mb-3 text-white studio-heading">
                                Experience Handloom Up Close
                            </h2>
                            <p className="lead studio-lead mb-4 text-white">
                                Step into our Thrissur sanctuary. Touch pure mulberry silk, view raw gold zari threads, and experience the quiet elegance of Kerala's finest curated handlooms.
                            </p>
                            <div className="d-flex gap-4 pt-3 studio-stats">
                                <div className="stat-box">
                                    <h4 className="fw-bold mb-0 text-gold">100%</h4>
                                    <small className="text-white-50">Pure Handloom Silk</small>
                                </div>
                                <div className="stat-box border-start border-gold-light ps-4">
                                    <h4 className="fw-bold mb-0 text-gold">360+</h4>
                                    <small className="text-white-50">Artisan Families</small>
                                </div>
                                <div className="stat-box border-start border-gold-light ps-4">
                                    <h4 className="fw-bold mb-0 text-gold">Bespoke</h4>
                                    <small className="text-white-50">Bridal Consultations</small>
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