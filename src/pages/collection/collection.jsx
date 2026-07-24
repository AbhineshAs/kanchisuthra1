import "./collection.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const mainSpotlight = {
    id: "muhurta",
    title: "Muhūrta - Bridal Edit",
    handle: "muhurta",
    tag: "BRIDAL & SACRED CEREMONIES",
    weaverOrigin: "Master Looms, Kanchipuram",
    subtitle: "Celestial weaves for eternal unions, handwoven with pure 24k gold zari and 6-ply mulberry silk.",
    description: "Our signature bridal curation designed for the sacred vows of a South Indian wedding. Every saree undergoes 140+ hours of hand-shuttle weaving, interlocked using the authentic Korvai technique.",
    button: "Explore Bridal Collection",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
};

const asymmetricPair = [
    {
        id: "kanchivaram-silk",
        category: "silk",
        title: "Kanchivaram Silks",
        handle: "kanchivaram-silk",
        tag: "SILK MARK CERTIFIED",
        weaverOrigin: "Korvai Weavers, Kanchipuram",
        subtitle: "The King of Silks featuring authentic 3-shuttle Korvai body and contrast border interlocking.",
        button: "Explore Kanjivaram Silks",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "pravesh",
        category: "festive",
        title: "Pravesh - Festive Edit",
        handle: "pravesh",
        tag: "FESTIVE & HOUSEWARMING",
        weaverOrigin: "Heritage Loom Clusters",
        subtitle: "Radiant handwoven sarees in vibrant ceremonial hues, created for housewarmings and family rituals.",
        button: "Explore Festive Edit",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop"
    }
];

const horizonGrid = [
    {
        id: "kanchi-silk-cotton",
        category: "silk-cotton",
        title: "Kanchi Silk Cotton",
        handle: "kanchi-silk-cotton",
        tag: "BREATHABLE LUXURY",
        weaverOrigin: "Kanchipuram Silk-Cotton Looms",
        subtitle: "Harmonious blend of mulberry silk luster with fine cotton comfort, featuring temple zari borders.",
        button: "Explore Silk Cotton",
        image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "kotta-silk-cotton",
        category: "silk-cotton",
        title: "Kotta Silk Cotton",
        handle: "kotta-silk-cotton",
        tag: "AIRY LATTICE WEAVE",
        weaverOrigin: "Checkered Weave Clusters",
        subtitle: "Translucent square check weaves paired with subtle silk shimmer, created for summer celebrations.",
        button: "Explore Kotta Silk Cotton",
        image: "https://images.unsplash.com/photo-1606760227091-3dd850d492a6?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "saar",
        category: "silk",
        title: "Saar - Masterpiece Edit",
        handle: "saar",
        tag: "LIMITED ARCHIVAL WEAVES",
        weaverOrigin: "Senior Master Looms",
        subtitle: "Rare, limited-edition weaves celebrating historical motifs and experimental color harmonies.",
        button: "Explore Masterpieces",
        image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop"
    }
];

const cottonPair = [
    {
        id: "kanchi-cotton",
        category: "cotton",
        title: "Kanchi Cotton",
        handle: "kanchi-cotton",
        tag: "PURE HANDSPUN COTTON",
        weaverOrigin: "Kanchi Cotton Guild",
        subtitle: "Crisp handloom cotton body adorned with heavy contrast zari temple borders.",
        button: "Explore Kanchi Cotton",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "kotta-cotton",
        category: "cotton",
        title: "Kotta Cotton",
        handle: "kotta-cotton",
        tag: "SUMMER BREATHABLE",
        weaverOrigin: "Lattice Weave Artisans",
        subtitle: "Fine square check cotton yarns offering supreme cooling comfort and understated grace.",
        button: "Explore Kotta Cotton",
        image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop"
    }
];

export default function Collection() {
    const [activeFaq, setActiveFaq] = useState(null);

    return (
        <div className="collection-magazine-page">

            {/* Header Hero */}
            <section className="magazine-hero-section text-center">
                <div className="container">
                    <span className="magazine-sub-tag">EDITORIAL GALLERY • CURATED HANDLOOMS</span>
                    <h1 className="magazine-main-title">The Collection Catalogue</h1>
                    <div className="gold-accent-line mx-auto my-3"></div>
                    <p className="magazine-hero-desc mx-auto">
                        Explore our curated editions arranged by weave philosophy, yarn composition, and ceremonial significance.
                    </p>
                </div>
            </section>

            {/* 1. SPOTLIGHT HERO COLLECTION (BRIDAL MUHURTA) */}
            <section className="spotlight-collection-section py-4">
                <div className="container">
                    <div className="spotlight-card-wrapper">
                        <div className="row align-items-center g-0">
                            <div className="col-lg-7">
                                <div className="spotlight-img-frame">
                                    <img src={mainSpotlight.image} alt={mainSpotlight.title} className="spotlight-img" />
                                    <span className="spotlight-badge">{mainSpotlight.tag}</span>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="spotlight-content-box p-4 p-md-5">
                                    <span className="weaver-origin-badge">
                                        <i className="bi bi-geo-alt-fill text-warning me-1"></i>
                                        {mainSpotlight.weaverOrigin}
                                    </span>
                                    <h2 className="spotlight-title mt-2">{mainSpotlight.title}</h2>
                                    <blockquote className="spotlight-quote my-3">
                                        "{mainSpotlight.subtitle}"
                                    </blockquote>
                                    <p className="spotlight-desc">{mainSpotlight.description}</p>
                                    <Link to={`/collection/${mainSpotlight.handle}`} className="btn-spotlight-cta">
                                        {mainSpotlight.button}
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. ASYMMETRICAL DUAL PAIR (KANJIVARAM SILK & PRAVESH FESTIVE) */}
            <section className="asymmetric-section py-5">
                <div className="container">
                    <div className="row g-5 align-items-stretch">
                        {asymmetricPair.map((item, idx) => (
                            <div className="col-lg-6" key={item.id}>
                                <div className={`magazine-card ${idx === 0 ? "tall-card" : "wide-card"}`}>
                                    <div className="magazine-img-wrap">
                                        <img src={item.image} alt={item.title} className="magazine-img" />
                                        <span className="magazine-card-tag">{item.tag}</span>
                                    </div>
                                    <div className="magazine-card-body">
                                        <span className="origin-label">{item.weaverOrigin}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                        <Link to={`/collection/${item.handle}`} className="magazine-btn">
                                            {item.button}
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. THREE-COLUMN HORIZON CARDS */}
            <section className="horizon-section py-5 bg-white">
                <div className="container">
                    <div className="section-title-wrap text-center mb-5">
                        <span className="sub-label">VERSATILE WEAVES</span>
                        <h2>Silk Cotton & Archival Edits</h2>
                        <div className="gold-accent-line mx-auto mt-2"></div>
                    </div>

                    <div className="row g-4">
                        {horizonGrid.map((item) => (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <div className="horizon-card">
                                    <div className="horizon-img-wrap">
                                        <img src={item.image} alt={item.title} className="horizon-img" />
                                        <span className="horizon-tag">{item.tag}</span>
                                    </div>
                                    <div className="horizon-body">
                                        <span className="origin-label">{item.weaverOrigin}</span>
                                        <h4>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                        <Link to={`/collection/${item.handle}`} className="horizon-btn">
                                            {item.button}
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BALANCED COTTON COLLECTION */}
            <section className="cotton-pair-section py-5">
                <div className="container">
                    <div className="section-title-wrap text-center mb-5">
                        <span className="sub-label">BREATHABLE ELEGANCE</span>
                        <h2>The Pure Cotton Collection</h2>
                        <p className="text-muted">Handcrafted for daily grace and summer rituals.</p>
                    </div>

                    <div className="row g-5">
                        {cottonPair.map((item) => (
                            <div className="col-lg-6" key={item.id}>
                                <div className="cotton-magazine-card">
                                    <div className="cotton-img-wrap">
                                        <img src={item.image} alt={item.title} className="cotton-img" />
                                        <span className="cotton-tag">{item.tag}</span>
                                    </div>
                                    <div className="cotton-body">
                                        <span className="origin-label">{item.weaverOrigin}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                        <Link to={`/collection/${item.handle}`} className="cotton-btn">
                                            {item.button}
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Silk Connoisseur Guide */}
            <section className="connoisseur-guide-section py-5">
                <div className="container">
                    <div className="text-center section-header-guide mb-5">
                        <span className="guide-sub-tag">TIME-HONORED KNOWLEDGE</span>
                        <h2>The Silk Connoisseur's Guide</h2>
                        <p className="text-muted mx-auto">Master the art of selecting, verifying, and preserving authentic South Indian handlooms.</p>
                    </div>

                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="accordion-guide-wrapper">
                                <div className="guide-faq-item">
                                    <button
                                        className={`faq-question-btn ${activeFaq === 0 ? "active" : ""}`}
                                        onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
                                    >
                                        <span>01. How to Identify Authentic Kanjivaram Korvai Silk?</span>
                                        <i className={`bi ${activeFaq === 0 ? "bi-dash-circle" : "bi-plus-circle"}`}></i>
                                    </button>
                                    {activeFaq === 0 && (
                                        <div className="faq-answer-content">
                                            <p>
                                                In true Korvai weaving, the body and contrast border are woven using three separate shuttles. Where the border meets the body, you will see a subtle jagged interlocking seam (called Petni). Powerloom prints attempt to imitate this, but handwoven Korvai seams are raised, textured, and unbreakable.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="guide-faq-item">
                                    <button
                                        className={`faq-question-btn ${activeFaq === 1 ? "active" : ""}`}
                                        onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
                                    >
                                        <span>02. What Makes 24k Tested Gold Zari Special?</span>
                                        <i className={`bi ${activeFaq === 1 ? "bi-dash-circle" : "bi-plus-circle"}`}></i>
                                    </button>
                                    {activeFaq === 1 && (
                                        <div className="faq-answer-content">
                                            <p>
                                                Authentic zari consists of a fine pure silver core wire wrapped in silk thread, electroplated with pure 24-karat gold. Unlike cheap copper or plastic zari that turns dark black after a few months, tested gold zari maintains its warm royal glow for decades.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="guide-faq-item">
                                    <button
                                        className={`faq-question-btn ${activeFaq === 2 ? "active" : ""}`}
                                        onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
                                    >
                                        <span>03. Best Practices for Heirloom Saree Care</span>
                                        <i className={`bi ${activeFaq === 2 ? "bi-dash-circle" : "bi-plus-circle"}`}></i>
                                    </button>
                                    {activeFaq === 2 && (
                                        <div className="faq-answer-content">
                                            <p>
                                                Always store pure silk sarees wrapped in unbleached white cotton or muslin fabric. Never hang heavy Kanjivaram sarees on plastic hangers, as the weight can stretch the warp yarns. Refold along different fold lines every 3 to 4 months to prevent permanent zari creases.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="guide-image-card">
                                <img
                                    src="https://images.unsplash.com/photo-1606760227091-3dd850d492a6?q=80&w=1200&auto=format&fit=crop"
                                    alt="Silk Connoisseur Guide"
                                    className="img-fluid rounded-3 shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}