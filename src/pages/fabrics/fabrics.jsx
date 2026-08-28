import "./fabrics.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import mulberryImg from "../../assets/images/DSC00817.JPG";
import silkCottonImg from "../../assets/images/DSC00899.JPG";
import kottaImg from "../../assets/images/DSC00926.JPG";
import zariImg from "../../assets/images/DSC08297.JPG";

const materialsData = [
    {
        id: "mulberry-silk",
        category: "silk",
        name: "Pure Mulberry Silk (6-Ply)",
        tag: "SILK MARK CERTIFIED",
        subtitle: "The Gold Standard of Kanjivaram Weaving",
        description: "Harvested from pure Bombyx mori silkworms, our 6-ply twisted mulberry silk yarns give Kanchisuthra sarees their distinctive heavy drape, rich natural luster, and century-long durability.",
        specs: [
            { label: "Tactile Feel", val: "Lustrous & Supple" },
            { label: "Ply Count", val: "6-Ply Double Twisted" },
            { label: "Weaving Art", val: "Korvai Interlocking" },
            { label: "Certification", val: "Silk Mark Guaranteed" }
        ],
        image: mulberryImg,
        link: "/collection/kanchivaram-silk"
    },
    {
        id: "silk-cotton",
        category: "blend",
        name: "Kanchi Silk Cotton Blend",
        tag: "BREATHABLE LUXURY",
        subtitle: "Harmonious Union of Sheen & Softness",
        description: "Combining high-count mulberry silk in the warp with fine combed cotton in the weft. Offers the royal appearance of Kanjivaram temple borders with all-day breathable comfort for tropical climates.",
        specs: [
            { label: "Tactile Feel", val: "Soft & Crisp" },
            { label: "Blend Ratio", val: "50% Silk / 50% Cotton" },
            { label: "Weaving Art", val: "Temple Border Weave" },
            { label: "Care Level", val: "Easy Handloom Maintenance" }
        ],
        image: silkCottonImg,
        link: "/collection/kanchi-silk-cotton"
    },
    {
        id: "kotta-cotton",
        category: "cotton",
        name: "Kotta Lattice Cotton",
        tag: "AIRY LATTICE WEAVE",
        subtitle: "Feather-Light Summer Perfection",
        description: "Woven with intricate square check lattice (Khat) patterns using fine handspun cotton threads. Engineered for high ventilation while maintaining crisp structural drape.",
        specs: [
            { label: "Tactile Feel", val: "Weightless & Translucent" },
            { label: "Pattern", val: "Square Check Lattice" },
            { label: "Yarn Count", val: "100s Fine Cotton" },
            { label: "Best For", val: "Summer Rituals & Daily Wear" }
        ],
        image: kottaImg,
        link: "/collection/kotta-cotton"
    },
    {
        id: "gold-zari",
        category: "zari",
        name: "Tested Gold Zari Metallic Thread",
        tag: "PRECIOUS METALLIC ART",
        subtitle: "Silver Core Wrapped in 24k Gold Electroplating",
        description: "Our signature gold zari features pure silver thread drawn into fine wire, electroplated with pure 24-karat gold, creating motifs that never tarnish or turn black over decades.",
        specs: [
            { label: "Core Thread", val: "Pure Fine Silver" },
            { label: "Plating", val: "24k Gold Electroplated" },
            { label: "Longevity", val: "Tarnish Resistant" },
            { label: "Motif Type", val: "Sacred Temple & Peacock" }
        ],
        image: zariImg,
        link: "/collection/kanchivaram-silk"
    }
];

export default function Fabrics() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredMaterials = activeFilter === "all"
        ? materialsData
        : materialsData.filter(m => m.category === activeFilter);

    return (
        <div className="materials-unique-page">
            {/* Editorial Hero */}
            <section className="materials-hero">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">
                            <span className="hero-sub-label">THE ANATOMY OF SILK • MATERIAL SCIENCE & HERITAGE</span>
                            <h1>Pristine Yarns. Uncompromised Purity.</h1>
                            <p className="hero-desc">
                                At Kanchisuthra, every textile begins at the yarn level. We source certified 6-ply Mulberry Silk, hand-twisted Silk Cotton blends, and 24k gold-plated zari to ensure our handloom heirlooms retain their lustrous dignity across generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Filterable Material Showcase */}
            <section className="materials-showcase-section">
                <div className="container">

                    {/* Filter Tabs */}
                    <div className="material-tabs-wrapper text-center mb-5">
                        <button
                            className={`material-tab-btn ${activeFilter === "all" ? "active" : ""}`}
                            onClick={() => setActiveFilter("all")}
                        >
                            ALL MATERIALS
                        </button>
                        <button
                            className={`material-tab-btn ${activeFilter === "silk" ? "active" : ""}`}
                            onClick={() => setActiveFilter("silk")}
                        >
                            PURE SILK
                        </button>
                        <button
                            className={`material-tab-btn ${activeFilter === "blend" ? "active" : ""}`}
                            onClick={() => setActiveFilter("blend")}
                        >
                            SILK COTTON
                        </button>
                        <button
                            className={`material-tab-btn ${activeFilter === "cotton" ? "active" : ""}`}
                            onClick={() => setActiveFilter("cotton")}
                        >
                            KOTTA & COTTON
                        </button>
                        <button
                            className={`material-tab-btn ${activeFilter === "zari" ? "active" : ""}`}
                            onClick={() => setActiveFilter("zari")}
                        >
                            GOLD ZARI
                        </button>
                    </div>

                    {/* Materials Grid */}
                    <div className="row g-5">
                        {filteredMaterials.map((mat) => (
                            <div className="col-lg-6" key={mat.id}>
                                <div className="unique-material-card">
                                    <div className="material-img-wrapper">
                                        <img src={mat.image} alt={mat.name} className="material-card-img" />
                                        <span className="material-badge-tag">{mat.tag}</span>
                                    </div>

                                    <div className="material-card-content">
                                        <span className="material-subtitle">{mat.subtitle}</span>
                                        <h3>{mat.name}</h3>
                                        <p>{mat.description}</p>

                                        {/* Specs Table */}
                                        <div className="specs-grid">
                                            {mat.specs.map((sp, idx) => (
                                                <div className="spec-item" key={idx}>
                                                    <span className="spec-label">{sp.label}</span>
                                                    <strong className="spec-val">{sp.val}</strong>
                                                </div>
                                            ))}
                                        </div>

                                        <Link to={mat.link} className="btn-explore-material">
                                            EXPLORE THIS MATERIAL
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Quality Standards Comparison Section */}
            <section className="purity-standards-section">
                <div className="container">
                    <div className="text-center section-header-purity">
                        <span className="sub-label">THE KANCHISUTHRA STANDARD</span>
                        <h2>Handloom Purity vs. Mass Powerloom</h2>
                        <p>Why authentic 6-ply handwoven textiles outlast powerloom substitutes.</p>
                    </div>

                    <div className="row g-4 mt-4">
                        <div className="col-lg-6">
                            <div className="purity-card handloom-card">
                                <div className="card-badge gold">KANCHISUTHRA HANDLOOM</div>
                                <h3>Authentic Handloom Weave</h3>
                                <ul className="purity-list">
                                    <li><i className="bi bi-check-circle-fill text-warning me-2"></i> 100% 6-Ply Mulberry Silk with Silk Mark Assurance</li>
                                    <li><i className="bi bi-check-circle-fill text-warning me-2"></i> Korvai 3-Shuttle Interlocking Body & Border</li>
                                    <li><i className="bi bi-check-circle-fill text-warning me-2"></i> Tested 24k Gold Electroplated Zari Threads</li>
                                    <li><i className="bi bi-check-circle-fill text-warning me-2"></i> Lifespan of 50+ Years (Heirloom Grade)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="purity-card powerloom-card">
                                <div className="card-badge gray">MASS POWERLOOM</div>
                                <h3>Machine-Made Imitation</h3>
                                <ul className="purity-list muted">
                                    <li><i className="bi bi-x-circle-fill text-muted me-2"></i> Low-ply synthetic or art-silk yarn blends</li>
                                    <li><i className="bi bi-x-circle-fill text-muted me-2"></i> Printed or glued borders that separate over time</li>
                                    <li><i className="bi bi-x-circle-fill text-muted me-2"></i> Copper/plastic zari that tarnishes to black</li>
                                    <li><i className="bi bi-x-circle-fill text-muted me-2"></i> Fades and loses shape after few dry cleans</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}