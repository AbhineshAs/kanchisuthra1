import "./ourStory.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function OurStory() {
    const [activeFounder, setActiveFounder] = useState("greeshma");

    return (
        <div className="our-story-unique-page">
            {/* Unique Asymmetric Split Hero */}
            <section className="unique-story-hero">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        {/* Left Content Column */}
                        <div className="col-lg-6">
                            <div className="story-hero-left">
                                <div className="hero-tag-badge">
                                    <span className="dot"></span>
                                    <span>OUR STORY • SISTERHOOD & HERITAGE</span>
                                </div>

                                <h1 className="hero-main-title">
                                    Two Sisters. <br />
                                    One Unbroken <em>Thread of Heritage.</em>
                                </h1>

                                <div className="gold-accent-line"></div>

                                <p className="hero-description">
                                    Founded in Thrissur, Kerala by sisters Greeshma and Dr. Lakshmi, Kanchisuthra represents a quiet revolution in South Indian handloom. We honor the memory of every shuttle stroke, connecting 360+ master weaver families in Kanchipuram directly with modern connoisseurs.
                                </p>

                                <div className="hero-quick-stats">
                                    <div className="stat-pill">
                                        <strong>360+</strong>
                                        <span>Master Looms</span>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat-pill">
                                        <strong>100%</strong>
                                        <span>Pure Mulberry Silk</span>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat-pill">
                                        <strong>Thrissur</strong>
                                        <span>Kerala Origins</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Overlapping Visual Composition Column */}
                        <div className="col-lg-6">
                            <div className="overlapping-visual-container">
                                <div className="primary-frame">
                                    <img
                                        src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
                                        alt="Master Weave Kanchipuram"
                                        className="img-fluid primary-img"
                                    />
                                </div>

                                <div className="secondary-offset-frame">
                                    <img
                                        src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
                                        alt="Sisterhood & Loom Crafts"
                                        className="img-fluid secondary-img"
                                    />
                                </div>

                                <div className="glass-floating-badge">
                                    <i className="bi bi-patch-check-fill text-warning me-2"></i>
                                    <span>DIRECT WEAVER PARTNERSHIPS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Founders Spotlight */}
            <section className="founders-spotlight-section">
                <div className="container">
                    <div className="text-center section-header-unique">
                        <span className="sub-label">THE MINDS BEHIND KANCHISUTHRA</span>
                        <h2>Meet the Co-Founders</h2>
                        <p>A fusion of aesthetic curation and slow-craft preservation.</p>
                    </div>

                    <div className="row g-4 mt-4">
                        {/* Founder Card 1: Greeshma */}
                        <div className="col-lg-6">
                            <div
                                className={`founder-card-interactive ${activeFounder === "greeshma" ? "active" : ""}`}
                                onMouseEnter={() => setActiveFounder("greeshma")}
                            >
                                <div className="founder-card-header">
                                    <div className="founder-avatar-circle">G</div>
                                    <div>
                                        <h3>Greeshma</h3>
                                        <span className="founder-role">Co-Founder & Chief Curator</span>
                                    </div>
                                </div>

                                <div className="founder-card-body">
                                    <blockquote className="founder-personal-quote">
                                        "I believe a saree should radiate quiet confidence. Our curation focuses on harmonious colors, subtle zari placement, and drapes that feel like second skin."
                                    </blockquote>

                                    <ul className="founder-focus-list">
                                        <li><i className="bi bi-check2"></i> Color palette design & motif selection</li>
                                        <li><i className="bi bi-check2"></i> Modern styling & drape ergonomics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Founder Card 2: Dr. Lakshmi */}
                        <div className="col-lg-6">
                            <div
                                className={`founder-card-interactive ${activeFounder === "lakshmi" ? "active" : ""}`}
                                onMouseEnter={() => setActiveFounder("lakshmi")}
                            >
                                <div className="founder-card-header">
                                    <div className="founder-avatar-circle gold">L</div>
                                    <div>
                                        <h3>Dr. Lakshmi</h3>
                                        <span className="founder-role">Co-Founder & Preservation Director</span>
                                    </div>
                                </div>

                                <div className="founder-card-body">
                                    <blockquote className="founder-personal-quote">
                                        "Every master weaver carries generations of oral wisdom. Our mission is to ensure their craft is celebrated and sustained with absolute transparency."
                                    </blockquote>

                                    <ul className="founder-focus-list">
                                        <li><i className="bi bi-check2"></i> Weaver family welfare & loom cluster visits</li>
                                        <li><i className="bi bi-check2"></i> Pure silk & gold zari authenticity testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Process Blueprint */}
            <section className="process-blueprint-section">
                <div className="container">
                    <div className="text-center section-header-unique light-text">
                        <span className="sub-label">THE CRAFT JOURNEY</span>
                        <h2>From Loom to Your Wardrobe</h2>
                        <p>How we ensure every saree remains a genuine handloom heirloom.</p>
                    </div>

                    <div className="row g-4 mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="blueprint-card">
                                <div className="blueprint-num">01</div>
                                <h4>Thrissur Vision</h4>
                                <p>Conceived in Thrissur, Kerala with a focus on quiet, unpretentious luxury and pure handloom fabrics.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="blueprint-card">
                                <div className="blueprint-num">02</div>
                                <h4>Kanchi Master Looms</h4>
                                <p>Weavers hand-throw each shuttle across wooden looms using mulberry silk threads and tested zari.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="blueprint-card">
                                <div className="blueprint-num">03</div>
                                <h4>Petni Interlocking</h4>
                                <p>Traditional three-shuttle weaving technique seamlessly joining the body and contrast border forever.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="blueprint-card">
                                <div className="blueprint-num">04</div>
                                <h4>Bespoke Delivery</h4>
                                <p>Inspected, hand-folded in breathable cotton bags, and delivered directly to your doorstep.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Values & Quality Pledge */}
            <section className="pledge-section">
                <div className="container">
                    <div className="pledge-card-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="sub-label">THE KANCHISUTHRA PROMISE</span>
                                <h2>Our Pledge of Purity</h2>
                                <p className="pledge-text">
                                    We never compromise with powerloom imitations or synthetic blends. Every saree bearing the Kanchisuthra seal is certified 100% handwoven silk and cotton.
                                </p>
                            </div>

                            <div className="col-lg-5 text-lg-end text-center mt-4 mt-lg-0">
                                <Link to="/collection" className="btn-explore-unique">
                                    EXPLORE HANDLOOM EDITS
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
