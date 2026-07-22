import "./home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shopifyFetch } from "../../api/shopify";
import banner from "../../assets/images/home-banner.png";
const Home = () => {


    return (
        <>

            {/* Hero Section */}
            < section className="hero-section" style={{
                backgroundImage: `url(${banner})`,
            }} >
                <div className="hero-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center text-center">
                        <div className="col-lg-8 hero-content">
                            <span className="hero-subtitle">
                                THE THREAD OF KANCHI • HANDLOOM HERITAGE
                            </span>

                            <h4 className="hero-title">
                                KANCHISUTHRA: WOVEN WITH MEMORY, WORN WITH QUIET CONFIDENCE
                            </h4>

                            <button className="hero-btn" onClick={() => window.location.href = '/collection'}>
                                EXPLORE HANDLOOM COLLECTIONS
                            </button>
                        </div>
                    </div>
                </div>

                <div className="scroll-down">
                    <i className="bi bi-chevron-down"></i>
                </div>
            </section >
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
                                <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" alt="Cream Kanjivaram" />

                                <span>NEW ARRIVAL</span>

                                <h4>Cream Kanjivaram</h4>

                                <p>Rs. 23,000.00</p>
                            </Link>
                        </div>

                        <div className="col-md-4">
                            <Link to="/collection" className="product-card center-card d-block text-decoration-none">
                                <img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop" alt="Vermilion Red" />

                                <span>ICONIC COLLECTION</span>

                                <h4>Vermilion Red</h4>

                                <p>Rs. 27,000.00</p>
                            </Link>
                        </div>

                        <div className="col-md-4">
                            <Link to="/collection" className="product-card d-block text-decoration-none">
                                <img src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop" alt="Ivory Kanchi Organza" />

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
            <section className="instagram-section">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="instagram-image">
                                <img
                                    src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop"
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
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
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
            <section className="heritage-section">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Content */}
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

                        {/* Right Image */}
                        <div className="col-lg-7 text-center">
                            <img
                                src="https://images.unsplash.com/photo-1606760227091-3dd850d492a6?q=80&w=1200&auto=format&fit=crop"
                                alt="Heritage"
                                className="img-fluid heritage-image"
                            />
                        </div>

                    </div>
                </div>
            </section>
            <section className="knowledge-section">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="knowledge-title">Know Your Kanchisuthra</h2>
                    </div>

                    <div className="row g-5">

                        <div className="col-lg-4 col-md-6">
                            <div className="knowledge-card">

                                <img
                                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop"
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
                                    src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop"
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
                                    src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=800&auto=format&fit=crop"
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
            <section
                className="visit-section py-5"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(26, 22, 18, 0.88), rgba(26, 22, 18, 0.45)), url(https://images.unsplash.com/photo-1606760227091-3dd850d492a6?q=80&w=1600&auto=format&fit=crop)`,
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
        </>
    );
};

export default Home;