import "./home.css";
import { useEffect, useState } from "react";
import { shopifyFetch } from "../../api/shopify";
import banner from "../../assets/images/home-banner.png";
const Home = () => {


    return (
        <>

            {/* Hero Section */}
            < section className="hero-section" >
                <div className="hero-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center text-center">
                        <div className="col-lg-8 hero-content">
                            <span className="hero-subtitle">
                                ARRIVING THIS SEASON
                            </span>

                            <h4 className="hero-title">
                                ŚOBHĀ: ELEGANT IN DETAIL, TIMELESS IN ALLURE
                            </h4>

                            <button className="hero-btn">
                                EXPLORE FESTIVE COLLECTION
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
                            Sarees that feel like a hug.
                        </h5>

                        <div className="divider"></div>

                        <p className="featured-text">
                            "Wise as your grandmom, Graceful as your mom,
                            Bold as you are."
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="product-card">
                                <img src="" alt="Cream Kanjivaram" />

                                <span>NEW ARRIVAL</span>

                                <h4>Cream Kanjivaram</h4>

                                <p>Rs. 23,000.00</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="product-card center-card">
                                <img src="" alt="Vermilion Red" />

                                <span>ICONIC COLLECTION</span>

                                <h4>Vermilion Red</h4>

                                <p>Rs. 27,000.00</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="product-card">
                                <img src="" alt="Ivory Kanchi Organza" />

                                <span>SIGNATURE SERIES</span>

                                <h4>Ivory Kanchi Organza</h4>

                                <p>Rs. 24,000.00</p>
                            </div>
                        </div>
                        <div>
                            <a href="/collection" className="fs-6 text-black">View all New Arrivals</a>
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
                                    src=""
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
                        <h5 className="section-title">Customer Love</h5>
                        <div className="divider"></div>
                    </div>

                    <div className="testimonial-card">

                        <div className="row align-items-center">

                            <div className="col-lg-4 text-center">
                                <img
                                    src=""
                                    alt="Maala Parvathy"
                                    className="customer-img"
                                />
                            </div>

                            <div className="col-lg-8">

                                <div className="quote-icon">
                                    <i className="bi bi-quote"></i>
                                </div>

                                <h2 className="testimonial-text">
                                    Whether it's a heartfelt tribute or a moment of joy,
                                    slipping into a Silkyway saree makes the moment truly
                                    special.
                                </h2>

                                <div className="customer-name">
                                    <span></span>
                                    MAALA PARVATHY
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
                                    On your big days and small since 1996.
                                </h2>

                                <p>
                                    Silkyway's origin cannot be traced back to a design studio but to
                                    the quiet chambers of a family home in Kerala. What began as a
                                    passion project soon garnered word of mouth, carried softly from one
                                    heart to another.
                                </p>

                                <p>
                                    To this day, Silkyway remains what it always was: a heartfelt
                                    pursuit, wrapped in silk and soul. A project of passion that honours
                                    our heritage while embracing the evolving present.
                                </p>

                                <a href="#" className="heritage-btn">
                                    Read The Silkyway Story
                                </a>

                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="col-lg-7 text-center">
                            <img
                                src=""
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
                        <h2 className="knowledge-title">Know your Silkyway</h2>
                    </div>

                    <div className="row g-5">

                        <div className="col-lg-4 col-md-6">
                            <div className="knowledge-card">

                                <img
                                    src=""
                                    alt="The Silks We Weave"
                                    className="img-fluid"
                                />

                                <div className="knowledge-content">
                                    <h3>The Silks We Weave</h3>

                                    <p>
                                        A tribute to time, tradition, and touch. Discover the intricate
                                        details of Kanjivaram and Banarasi weaving.
                                    </p>

                                    <a href="#">
                                        READ MORE
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="knowledge-card">

                                <img
                                    src=""
                                    alt="Silk Saree After Care"
                                    className="img-fluid"
                                />

                                <div className="knowledge-content">
                                    <h3>Silk Saree After Care</h3>

                                    <p>
                                        Elegance maintained. Learn the professional secrets to keeping
                                        your heritage pieces pristine.
                                    </p>

                                    <a href="#">
                                        KNOW MORE
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mx-md-auto">
                            <div className="knowledge-card">

                                <img
                                    src=""
                                    alt="Understanding Silk"
                                    className="img-fluid"
                                />

                                <div className="knowledge-content">
                                    <h3>Understanding Silk</h3>

                                    <p>
                                        A connoisseur's guide to India's finest weaves. From thread counts
                                        to zari purity, learn it all.
                                    </p>

                                    <a href="#">
                                        READ MORE
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section
                className="visit-section"
                style={{ backgroundImage: `url()` }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">

                        <div className="col-lg-5">

                            <div className="visit-card">

                                <h5>Visit Us</h5>

                                <h3>THIRUVANANTHAPURAM FLAGSHIP</h3>

                                <p>
                                    Ground Floor, Hycinth Hotel,
                                    Manorama Rd, Thampanoor,
                                    Kerala 695001
                                </p>

                                <h4>CONTACT</h4>

                                <p>Ph.No. +91 99953 71332</p>

                                <div className="visit-buttons">

                                    <a href="#" className="btn-direction">
                                        DIRECTIONS
                                    </a>

                                    <a href="#" className="btn-store">
                                        STORE DETAILS
                                    </a>

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