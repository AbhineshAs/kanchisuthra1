import "./heritage.css";

export default function Heritage() {
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
                            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop"
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
                                src="https://images.unsplash.com/photo-1606760227091-3dd850d492a6?q=80&w=1200&auto=format&fit=crop"
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

                                <a href="/collection">
                                    EXPLORE THE COLLECTIONS
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </a>

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

                        <div className="story-label">
                            SLOW CRAFT
                        </div>

                        <div className="story-circle">

                            <img
                                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
                                alt="Reflection"
                            />

                            <span className="story-caption">
                                Slow Craft
                            </span>

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

                        <span className="section-subtitle">
                            THE ANATOMY OF A MASTERPIECE
                        </span>

                        <h2>Preserving the Art</h2>

                    </div>

                    <div className="row mt-5 align-items-start">

                        {/* Left */}

                        <div className="col-lg-6">

                            <img
                                src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop"
                                alt="Zari Weave"
                                className="img-fluid preserving-large"
                            />

                            <div className="preserving-content mt-4">

                                <h3>The Zari Weave</h3>

                                <p>
                                    The intricate gold thread work that defines the borders
                                    and pallu of our heritage collection.
                                </p>

                            </div>

                        </div>

                        {/* Right */}

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
                                        Each thread is dyed using traditional techniques
                                        that respect the fibre's natural integrity,
                                        ensuring colours remain vibrant for generations.
                                    </p>

                                </div>

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

                            <div className="founder-avatar">
                                G & L
                            </div>

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

                    <form className="newsletter-form">

                        <input
                            type="email"
                            placeholder="YOUR EMAIL ADDRESS"
                        />

                        <button type="submit">
                            SUBSCRIBE
                        </button>

                    </form>

                </div>

            </section>
        </>
    );
}