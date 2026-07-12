import "./fabrics.css";

const Fabrics = () => {
    return (
        <>
            <section
                className="fabric-hero"
                style={{ backgroundImage: `url()` }}
            >
                <div className="fabric-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">

                        <div className="col-lg-10 text-center fabric-content">

                            <h1>The Art of the Weave</h1>

                            <span>WOVEN WISDOM FROM SOUTH INDIA</span>

                        </div>

                    </div>
                </div>

            </section>
            <section className="heritage-textiles">
                <div className="container">

                    <div className="section-header text-center">
                        <span>THE LEGACY OF THREADS</span>

                        <h2>Commitment to Heritage Textiles</h2>

                        <p>
                            At Kanchisuthra, every thread tells a story of devotion. We
                            bridge the gap between ancient looms and the modern connoisseur,
                            curating a pristine taste profile that embodies everything
                            soulful about our textile heritage.
                        </p>
                    </div>

                    <div className="row g-5 align-items-center">

                        {/* Kanjivaram */}
                        <div className="col-lg-6">
                            <div className="fabric-item left-layout">

                                <img
                                    src=""
                                    alt="Kanjivaram"
                                />

                                <div className="fabric-content">
                                    <h3>Kanjivaram</h3>

                                    <p>
                                        The King of Silks. Renowned for its rich gold zari
                                        and vibrant colours, representing the pinnacle of
                                        South Indian weaving.
                                    </p>

                                    <a href="#">
                                        Explore Collection
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* Organza */}
                        <div className="col-lg-6">
                            <div className="fabric-item right-layout">

                                <div className="fabric-content">
                                    <h3>Organza</h3>

                                    <p>
                                        Delicate transparency. A feather-light weave with a
                                        graceful shimmer for the modern muse.
                                    </p>
                                </div>

                                <img
                                    src=""
                                    alt="Organza"
                                />

                            </div>
                        </div>

                        {/* Tussar */}
                        <div className="col-lg-6">
                            <div className="fabric-item">

                                <img
                                    src=""
                                    alt="Tussar"
                                />

                                <div className="fabric-content">
                                    <h3>Tussar</h3>

                                    <p>
                                        Wild Elegance. Valued for its natural texture and
                                        deep earthy tones harvested from the wild.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Fusion */}
                        <div className="col-lg-6">
                            <div className="fabric-item">

                                <div className="fabric-content">
                                    <h3>Fusion</h3>

                                    <p>
                                        Tradition reimagined. A modern blend of heritage
                                        techniques and contemporary silhouettes.
                                    </p>

                                    <a href="#">
                                        View Edit
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </a>
                                </div>

                                <img
                                    src=""
                                    alt="Fusion"
                                />

                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* Weavers Banner */}
            <section
                className="weaver-banner"
                style={{ backgroundImage: `url()` }}
            >
                <div className="weaver-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 align-items-center">

                        <div className="col-lg-5">

                            <div className="weaver-content">

                                <span>THE SOUL OF THE WEAVER</span>

                                <h2>
                                    A Symphony of Hands
                                    <br />
                                    and Looms
                                </h2>

                                <p>
                                    Every Kanchisuthra saree passes through the hands of
                                    masters who have inherited the craft over generations.
                                    This is not mere production; it is a sacred ritual of
                                    preserving beauty.
                                </p>

                                <button className="weaver-btn">
                                    LEARN MORE
                                </button>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Fabrics;