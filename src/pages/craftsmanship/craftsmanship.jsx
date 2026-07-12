import "./craftsmanship.css";


const Craftsmanship = () => {
    return (
        <>
            {/* Hero */}
            <section
                className="craft-hero"
                style={{ backgroundImage: `url()` }}
            >
                <div className="craft-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-8 text-center craft-content">

                            <h1>
                                The Alchemy of Pure Silk &
                                <br />
                                Devotion
                            </h1>

                            <p>
                                Discover the sacred traditions behind every Kanchisuthra
                                saree where skilled artisans transform fine threads into
                                timeless elegance.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Soul of Weaver */}
            <section className="craft-section">
                <div className="container">
                    <div className="row align-items-center gy-5">

                        <div className="col-lg-6">
                            <span className="section-label">PHASE I</span>

                            <h2>The Soul of the Weaver</h2>

                            <p>
                                In the heart of Kanchipuram, our master weavers breathe life
                                into every thread. Each saree is woven on wooden looms,
                                carrying decades of wisdom through every movement.
                            </p>

                            <p>
                                The purity of our pure silk and intricate craftsmanship
                                ensure every masterpiece remains an heirloom.
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
                                src=""
                                alt="Weaver"
                                className="img-fluid"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Petni Ritual */}
            <section className="craft-section light">
                <div className="container">
                    <div className="row align-items-center gy-5">

                        <div className="col-lg-6">
                            <img
                                src=""
                                alt="Petni Ritual"
                                className="img-fluid"
                            />
                        </div>

                        <div className="col-lg-6">

                            <h2>The Petni Ritual</h2>

                            <p>
                                The most delicate part of a Kanjivaram masterpiece is the
                                Petni – where body and border unite forever in one seamless
                                weave.
                            </p>

                            <a href="#">
                                Explore Technique
                                <i className="bi bi-arrow-right ms-2"></i>
                            </a>

                        </div>

                    </div>
                </div>
            </section>
            {/* Ritual of Care */}
            <section className="care-section">
                <div className="container">

                    <div className="text-center section-header">

                        <h2>Threads that bind time.</h2>

                        <div className="divider"></div>

                        <h3>The Ritual of Care</h3>

                        <p>
                            A Kanchisuthra saree is a living work of art. To ensure every
                            fold and fibre retains its brilliance for generations, follow
                            these simple rituals.
                        </p>

                    </div>

                    <div className="row text-center g-4 mt-5">

                        <div className="col-lg-3 col-md-6">
                            <div className="care-card">
                                <i className="bi bi-box-seam"></i>

                                <h4>The Storage</h4>

                                <p>
                                    Wrap your saree in a soft muslin cloth and store away
                                    from direct sunlight.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="care-card">
                                <i className="bi bi-stars"></i>

                                <h4>The Fold</h4>

                                <p>
                                    Change the folds every few months to maintain the silk's
                                    graceful drape.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="care-card">
                                <i className="bi bi-droplet"></i>

                                <h4>The Cleaning</h4>

                                <p>
                                    Always choose professional dry cleaning to preserve the
                                    weave and zari.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="care-card">
                                <i className="bi bi-flower1"></i>

                                <h4>The Longevity</h4>

                                <p>
                                    Protect from moisture and perfumes to preserve the
                                    natural lustre.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* Longevity Section */}

            <section className="longevity-section">

                <div className="container">

                    <div className="row align-items-center gy-5">

                        <div className="col-lg-6">

                            <img
                                src=""
                                alt="Saree Care"
                                className="img-fluid care-image"
                            />

                        </div>

                        <div className="col-lg-6">

                            <h2>The Longevity of Luster</h2>

                            <p>
                                Silk deserves the same elegance with which it was woven.
                                Follow these timeless rituals to preserve its beauty for
                                generations.
                            </p>

                            <ul className="care-list">

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Avoid Folding in the same crease repeatedly.
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Use padded hangers for short-term storage.
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Store in breathable cotton or muslin bags.
                                </li>

                            </ul>

                            <button className="care-btn">
                                REQUEST BESPOKE CARE GUIDE
                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default Craftsmanship;