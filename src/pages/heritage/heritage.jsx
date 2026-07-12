import "./heritage.css";

export default function Heritage() {
    return (
        <>
            {/* Hero */}
            <section className="heritage-page">

                <div className="container">

                    <div className="heritage-heading text-center">

                        <span>EST. 1996</span>

                        <h1>
                            A Legacy in <em>Every Thread</em>
                        </h1>

                        <p>
                            From the quiet chambers of a family home in Kerala to the grand
                            looms of Kanchipuram, our journey is woven with devotion and a
                            shared reverence for textile heritage.
                        </p>

                    </div>

                    <div className="heritage-banner">
                        <img
                            src=""
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
                                src=""
                                alt="Loom and artisan"
                                className="img-fluid origin-image"
                            />

                        </div>

                        <div className="col-lg-6">

                            <div className="origin-content">

                                <h2>Our Origins</h2>

                                <div className="title-line"></div>

                                <p>
                                    Silkyway's origin cannot be traced back to a design studio but
                                    to the quiet chambers of a family home in Kerala. Started in
                                    1996 to dress herself and close family, Smitha's passion
                                    project soon garnered word of mouth.
                                </p>

                                <p>
                                    What began in quiet devotion soon found a voice, carried
                                    softly from one heart to another, growing with every thread,
                                    every whispered praise. It was a heartfelt pursuit, wrapped in
                                    silk and soul.
                                </p>

                                <a href="#">
                                    EXPLORE THE STORY
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

                    <h2>The Kanchipuram Story</h2>

                    <div className="story-wrapper">

                        <div className="story-label">
                            REFLECTION
                        </div>

                        <div className="story-circle">

                            <img
                                src=""
                                alt="Reflection"
                            />

                            <span className="story-caption">
                                Reflection
                            </span>

                        </div>

                    </div>

                    <div className="story-content">

                        <p>
                            The King of Silks is more than a fabric; it is a mirror
                            reflecting centuries of craftsmanship. In Kanchipuram, the
                            weave is a sacred ritual, where pure mulberry silk meets real
                            gold and silver zari.
                        </p>

                        <p className="story-quote">
                            "A Kanchipuram saree is a memory passed on, a legacy
                            continuing through the rustle of its heavy drapes."
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
                                src=""
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
                                    src=""
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
                            "We want to create sarees for the modern world with an air of
                            old world charm to them. Inspired from the past, for the
                            evolving present, and passed onto the future."
                        </blockquote>

                        <div className="founder">

                            <div className="founder-avatar">
                                S
                            </div>

                            <h6>SHANTHI</h6>

                            <span>Founder, Kanchisuthra</span>

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