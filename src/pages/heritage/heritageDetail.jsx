import "./heritage.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { heritageStories } from "../../data/heritageStories";
import heritageBannerImg from "../../assets/herosection/DSC07269.JPG";
import loomArtisanImg from "../../assets/herosection/DSC07814.JPG";

export default function Heritage() {
    const { slug } = useParams();

    const story = heritageStories.find(
        item => item.slug === slug
    );

    if (!story) {
        return <h2>Story Not Found</h2>;
    }
    return (
        <>
            {/* Hero */}
            <section className="heritage-page">
                <div className="container">
                    <div className="heritage-heading text-center">
                        <span>THE THREAD OF KANCHI • THRISSUR, KERALA</span>

                        <h1>
                            A Celebration of Handloom, <em>Heritage & Quiet Confidence</em>
                        </h1>

                        <p>
                            Founded by sisters Greeshma and Dr. Lakshmi from Thrissur, Kerala, Kanchisuthra was born from a shared belief — that a handloom saree is never just fabric. It carries the memory of the hands that wove it, the tradition of the region it came from, and the story of every woman who wears it.
                        </p>
                    </div>

                    <div className="heritage-banner">
                        <img
                            src={heritageBannerImg}
                            alt="Heritage Moment"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </section>

            {/* Origins */}
            <section className="origin-section">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <img
                                src={loomArtisanImg}
                                alt="Loom and artisan"
                                className="img-fluid origin-image"
                            />
                        </div>

                        <div className="col-lg-6">
                            <div className="origin-content">
                                <h2>The Meaning of Kanchisuthra</h2>

                                <div className="title-line"></div>

                                <p>
                                    The name <strong>Kanchisuthra</strong> means the thread of Kanchi — but for us, it means something wider. It is the unbroken thread that connects a master weaver's loom directly to your hands. We believe that thread should never be broken by shortcuts.
                                </p>

                                <p>
                                    Our collections are rooted in the craft of India's great weaving communities — but chosen thoughtfully for the modern Kerala woman. Timeless, considered, and quietly beautiful.
                                </p>

                                <Link to="/collection">
                                    EXPLORE THE COLLECTIONS
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Master Craftsmanship & Soul of Weaver */}
            <section className="craft-section">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <span className="section-subtitle">THE ALCHEMY OF PURE SILK</span>

                            <h2>The Soul of the Weaver</h2>

                            <p>
                                In the heart of Kanchipuram, our master weavers breathe life into every thread. Each saree is woven on traditional wooden looms, carrying decades of wisdom through every movement of the shuttle.
                            </p>

                            <p>
                                The purity of our mulberry silk and intricate craftsmanship ensure every piece remains a treasured heirloom passed down through generations.
                            </p>

                            <div className="craft-stats">
                                <div>
                                    <h3>360+</h3>
                                    <span>MASTER WEAVERS</span>
                                </div>

                                <div>
                                    <h3>Pure</h3>
                                    <span>MULBERRY SILK</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center">
                            <img
                                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
                                alt="Master Weaver at Work"
                                className="img-fluid craft-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Petni Technique Ritual */}
            <section className="petni-section">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"
                                alt="Petni Weaving Technique"
                                className="img-fluid petni-image"
                            />
                        </div>

                        <div className="col-lg-6">
                            <div className="petni-content">
                                <span className="section-subtitle">SACRED WEAVING TECHNIQUE</span>
                                <h2>The Petni Ritual</h2>

                                <p>
                                    The most delicate part of a Kanjivaram masterpiece is the <strong>Petni technique</strong> – where the body and border of the saree are woven separately and united forever in one seamless, unbreakable weave.
                                </p>

                                <Link to="/fabrics" className="craft-link">
                                    EXPLORE FABRIC TECHNIQUES
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kanchipuram Story */}
            <section className="kanchi-story">
                <div className="container">
                    <h2>Depth Over Volume</h2>

                    <div className="story-wrapper">
                        <div className="story-label">SLOW CRAFT</div>

                        <div className="story-circle">
                            <img
                                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
                                alt="Reflection"
                            />

                            <span className="story-caption">Slow Craft</span>
                        </div>
                    </div>

                    <div className="story-content">
                        <p>
                            We work in small, considered quantities, choosing depth over volume and preserving the integrity of slow craft. From everyday cottons to heirloom silks, each piece is selected for its character, its weave, and the quiet story it carries within it.
                        </p>

                        <p className="story-quote">
                            "A handloom saree carries history, the memory of a tradition, and the touch of the hands that wove it."
                        </p>
                    </div>
                </div>
            </section>

            {/* Preserving the Art */}
            <section className="preserving-art">
                <div className="container">
                    <div className="text-center">
                        <span className="section-subtitle">THE ANATOMY OF A MASTERPIECE</span>
                        <h2>Preserving the Art</h2>
                    </div>

                    <div className="row mt-5 align-items-start">
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop"
                                alt="Zari Weave"
                                className="img-fluid preserving-large"
                            />

                            <div className="preserving-content mt-4">
                                <h3>The Zari Weave</h3>
                                <p>
                                    The intricate gold thread work that defines the borders and pallu of our heritage collection.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="right-block">
                                <img
                                    src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=1200&auto=format&fit=crop"
                                    alt="Thread Dye"
                                    className="img-fluid preserving-small"
                                />

                                <div className="preserving-content mt-4">
                                    <h3>Soul in Every Shade</h3>
                                    <p>
                                        Each thread is dyed using traditional techniques that respect the fibre's natural integrity, ensuring colours remain vibrant for generations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ritual of Care & Longevity */}
            <section className="care-section">
                <div className="container">
                    <div className="text-center section-header">
                        <h2>Threads That Bind Time</h2>
                        <div className="divider"></div>
                        <h3 className="care-subtitle">The Ritual of Heirloom Care</h3>
                        <p>
                            A Kanchisuthra saree is a living work of art. To ensure every fold and fibre retains its brilliance for generations, follow these simple care rituals.
                        </p>
                    </div>

                    <div className="row text-center g-4 mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="care-card">
                                <i className="bi bi-box-seam"></i>
                                <h4>The Storage</h4>
                                <p>Wrap your saree in soft muslin cloth and store away from direct sunlight.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="care-card">
                                <i className="bi bi-stars"></i>
                                <h4>The Fold</h4>
                                <p>Change folds every few months to maintain the silk's graceful drape.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="care-card">
                                <i className="bi bi-droplet"></i>
                                <h4>The Cleaning</h4>
                                <p>Always choose professional dry cleaning to preserve the weave and zari.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="care-card">
                                <i className="bi bi-flower1"></i>
                                <h4>The Longevity</h4>
                                <p>Protect from moisture and perfumes to preserve the natural lustre.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Quote */}
            <section className="heritage-quote">
                <div className="container">
                    <div className="quote-wrapper">
                        <i className="bi bi-quote quote-icon"></i>

                        <blockquote>
                            "Kanchisuthra is a celebration of handloom, heritage, and the quiet confidence of a woman who knows what she is wearing."
                        </blockquote>

                        <div className="founder">
                            <div className="founder-avatar">G & L</div>
                            <h6>GREESMA & DR. LAKSHMI</h6>
                            <span>Sisters & Co-Founders, Kanchisuthra (Thrissur, Kerala)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="heritage-newsletter">
                <div className="container text-center">
                    <h2>Join our Inner Circle</h2>

                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="YOUR EMAIL ADDRESS" />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
            </section>
        </>
    );
}