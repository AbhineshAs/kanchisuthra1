import "./home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import hero1 from "../../assets/herosection/DSC07269.JPG";
import hero2 from "../../assets/herosection/DSC07273.JPG";
import hero3 from "../../assets/images/DSC07256.JPG";

import newArrival1 from "../../assets/herosection/DSC07343.JPG";
import newArrival2 from "../../assets/herosection/DSC07384.JPG";
import newArrival3 from "../../assets/herosection/DSC07425.JPG";

import instaImg from "../../assets/herosection/DSC07469.JPG";
import museImg from "../../assets/herosection/DSC07570.JPG";
import heritageImg from "../../assets/herosection/DSC07682.JPG";

import know1 from "../../assets/herosection/DSC07814.JPG";
import know2 from "../../assets/herosection/DSC07870.JPG";
import know3 from "../../assets/herosection/DSC07938.JPG";

import studioBg from "../../assets/herosection/DSC08078.JPG";

const heroSlides = [
    {
        image: hero1,
        subtitle: "THE THREAD OF KANCHI • HANDLOOM HERITAGE",
        title: "KANCHISUTHRA: WOVEN WITH MEMORY, WORN WITH QUIET CONFIDENCE",
        btnText: "EXPLORE HANDLOOM COLLECTIONS",
        link: "/collection"
    },
    {
        image: hero2,
        subtitle: "SACRED KANJIVARAM SILKS • ARCHIVAL WEAVES",
        title: "SACRED GOLD ZARI & TIMELESS KERALA ELEGANCE",
        btnText: "DISCOVER THE SILK EDITS",
        link: "/collection/kanchivaram-silk"
    },
    {
        image: hero3,
        subtitle: "THRISSUR, KERALA • SISTERHOOD & HERITAGE",
        title: "AN UNBROKEN BOND FROM LOOM TO YOUR HANDS",
        btnText: "READ OUR STORY",
        link: "/our-story"
    }
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <>
            {/* Hero Section Slider */}
            <section className="hero-section">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slider-slide ${index === currentSlide ? "active" : ""}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}

                <div className="hero-overlay"></div>

                <div className="container h-100 position-relative" style={{ zIndex: 5 }}>
                    <div className="row h-100 justify-content-center align-items-center text-center">
                        <div className="col-lg-8 hero-content">
                            <span className="hero-subtitle">
                                {heroSlides[currentSlide].subtitle}
                            </span>

                            <h4 className="hero-title">
                                {heroSlides[currentSlide].title}
                            </h4>

                            <button
                                className="hero-btn"
                                onClick={() => window.location.href = heroSlides[currentSlide].link}
                            >
                                {heroSlides[currentSlide].btnText}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Nav Controls */}
                <button className="hero-nav-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
                    <i className="bi bi-chevron-left"></i>
                </button>

                <button className="hero-nav-arrow next" onClick={nextSlide} aria-label="Next Slide">
                    <i className="bi bi-chevron-right"></i>
                </button>

                <div className="hero-dots">
                    {heroSlides.map((_, idx) => (
                        <span
                            key={idx}
                            className={`hero-dot ${idx === currentSlide ? "active" : ""}`}
                            onClick={() => setCurrentSlide(idx)}
                        />
                    ))}
                </div>

                <div className="scroll-down">
                    <i className="bi bi-chevron-down"></i>
                </div>
            </section>

            {/* Featured Section */}
            <section className="featured-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h5 className="featured-heading">
                            A Celebration of Handloom & Heritage
                        </h5>

                        <div className="divider"></div>

                        <p className="featured-text">
                            "A handloom saree is never just fabric. It carries the memory of the hands that wove it, the tradition of its origin, and the story of every woman who wears it."
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <Link to="/collection" className="product-card d-block text-decoration-none">
                                <img src={newArrival1} alt="Cream Kanjivaram" />
                                <span>NEW ARRIVAL</span>
                                <h4>Cream Kanjivaram</h4>
                                <p>Rs. 27,000.00</p>
                            </Link>
                        </div>

                        <div className="col-md-4">
                            <Link to="/collection" className="product-card center-card d-block text-decoration-none">
                                <img src={newArrival2} alt="Vermilion Red" />
                                <span>ICONIC COLLECTION</span>
                                <h4>Vermilion Red</h4>
                                <p>Rs. 27,000.00</p>
                            </Link>
                        </div>

                        <div className="col-md-4">
                            <Link to="/collection" className="product-card d-block text-decoration-none">
                                <img src={newArrival3} alt="Ivory Kanchi Organza" />
                                <span>SIGNATURE SERIES</span>
                                <h4>Ivory Kanchi Organza</h4>
                                <p>Rs. 24,000.00</p>
                            </Link>
                        </div>

                        <div className="text-center mt-4">
                            <Link to="/collection" className="btn btn-outline-dark rounded-pill px-4 py-2 text-uppercase fw-semibold" style={{ fontSize: "13px", letterSpacing: "1px" }}>
                                View All New Arrivals <i className="bi bi-arrow-right ms-1"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="instagram-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="instagram-image">
                                <img
                                    src={instaImg}
                                    alt="Community Highlight"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="instagram-content">
                                <h2>
                                    Where the <span>Story</span> Continues
                                </h2>

                                <p>
                                    Join 100K+ saree lovers on Instagram for daily drops,
                                    exclusive edits, artisan stories, or simply to chat
                                    with us about all things silk. Every thread has a tale
                                    to tell.
                                </p>

                                <button className="instagram-btn">
                                    FOLLOW US ON INSTAGRAM
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h5 className="section-title">Customer Love & Reflections</h5>
                        <div className="divider"></div>
                    </div>

                    <div className="testimonial-card">
                        <div className="row align-items-center">
                            <div className="col-lg-4 text-center">
                                <img
                                    src={museImg}
                                    alt="Client Story"
                                    className="customer-img"
                                />
                            </div>

                            <div className="col-lg-8">
                                <div className="quote-icon">
                                    <i className="bi bi-quote"></i>
                                </div>

                                <h2 className="testimonial-text">
                                    "A Kanchisuthra saree is never just fabric. Slipping into one carries the memory of master weaver hands and the quiet confidence of pure heritage."
                                </h2>

                                <div className="customer-name">
                                    <span></span>
                                    MODERN KERALA MUSE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Heritage Section */}
            <section className="heritage-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="heritage-content">
                                <h2>
                                    The Unbroken Thread of Heritage & Sisterhood.
                                </h2>

                                <p>
                                    Founded in Thrissur, Kerala, by sisters Greeshma and Dr. Lakshmi, Kanchisuthra was born from a shared belief: a handloom saree is a living archive. It carries the memory of the hands that wove it and the story of every woman who wears it.
                                </p>

                                <p>
                                    The name <em>Kanchisuthra</em> means the sacred thread of Kanchi — an unbroken bond connecting the master weaver's wooden loom directly to your hands. We choose small, considered quantities and slow craft over volume.
                                </p>

                                <a href="/heritage" className="heritage-btn">
                                    Read The Kanchisuthra Story
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-7 text-center">
                            <img
                                src={heritageImg}
                                alt="Heritage"
                                className="img-fluid heritage-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge Section */}
            <section className="knowledge-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="knowledge-title">Know Your Kanchisuthra</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="knowledge-card">
                                <img
                                    src={know1}
                                    alt="The Silks We Weave"
                                    className="img-fluid"
                                />

                                <div className="knowledge-content">
                                    <h3>The Silks We Weave</h3>
                                    <p>
                                        A tribute to time, tradition, and touch. Discover the intricate
                                        details of Kanjivaram and Banarasi weaving.
                                    </p>
                                    <Link to="/fabrics">
                                        READ MORE
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="knowledge-card">
                                <img
                                    src={know2}
                                    alt="Silk Saree After Care"
                                    className="img-fluid"
                                />

                                <div className="knowledge-content">
                                    <h3>Silk Saree After Care</h3>
                                    <p>
                                        Elegance maintained. Learn the professional secrets to keeping
                                        your heritage pieces pristine.
                                    </p>
                                    <Link to="/craftsmanship">
                                        KNOW MORE
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mx-md-auto">
                            <div className="knowledge-card">
                                <img
                                    src={know3}
                                    alt="Understanding Silk"
                                    className="img-fluid"
                                />

                                <div className="knowledge-content">
                                    <h3>Understanding Silk</h3>
                                    <p>
                                        A connoisseur's guide to India's finest weaves. From thread counts
                                        to zari purity, learn it all.
                                    </p>
                                    <Link to="/heritage">
                                        READ MORE
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
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${studioBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "550px",
                    display: "flex",
                    alignItems: "center"
                }}
            >
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
                                        to="/heritage"
                                        className="btn-store btn btn-outline-dark px-4 py-2 rounded-3 text-uppercase fw-semibold"
                                        style={{ fontSize: "13px" }}
                                    >
                                        Our Story
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 ps-lg-5 d-none d-lg-block text-white">
                            <span className="border border-white border-opacity-50 px-3 py-2 rounded-pill mb-3 d-inline-block" style={{ letterSpacing: "2px" }}>
                                SLOW CRAFT BOUTIQUE
                            </span>
                            <h2 className="display-5 fw-bold mb-3 text-white">
                                Experience Handloom Up Close
                            </h2>
                            <p className="lead opacity-90 mb-4 text-white" style={{ fontSize: "17px", lineHeight: "1.8" }}>
                                Step into our Thrissur sanctuary. Touch pure mulberry silk, view raw gold zari threads, and experience the quiet elegance of Kerala's finest curated handlooms.
                            </p>
                            <div className="d-flex gap-4 pt-2">
                                <div>
                                    <h4 className="fw-bold mb-0" style={{ color: "#e6c594" }}>100%</h4>
                                    <small className="opacity-90 text-white">Pure Handloom Silk</small>
                                </div>
                                <div className="border-start border-light border-opacity-50 ps-4">
                                    <h4 className="fw-bold mb-0" style={{ color: "#e6c594" }}>360+</h4>
                                    <small className="opacity-90 text-white">Artisan Families</small>
                                </div>
                                <div className="border-start border-light border-opacity-50 ps-4">
                                    <h4 className="fw-bold mb-0" style={{ color: "#e6c594" }}>Bespoke</h4>
                                    <small className="opacity-90 text-white">Bridal Consultations</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;