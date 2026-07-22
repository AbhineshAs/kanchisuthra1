import "./collection.css";
import { Link } from "react-router-dom";


const collections = [
    {
        title: "Muhūrta - Wedding Collection",
        handle: "wedding-collection",
        subtitle:
            "Celestial weaves for eternal unions, crafted with pure gold zari and the finest mulberry silk.",
        button: "Explore Collection",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
        className: "large",
    },
    {
        title: "Śobhā - Festive Collection",
        handle: "festive",
        button: "View More",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
        className: "tall",
    },
    {
        title: "Prātidina - Daily Wear",
        handle: "daily-wear",
        button: "Shop Now",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Tussars & Organzas",
        handle: "tussars-organzas",
        button: "Explore",
        image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Fusion",
        handle: "fusion",
        button: "View Gallery",
        image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function Collection() {
    return (
        <>
            <section className="collection-page">
                <div className="container">

                    <div className="collection-heading text-center">
                        <span>CURATED HERITAGE</span>

                        <h2>Our Collections</h2>

                        <div className="heading-line"></div>
                    </div>

                    <div className="collection-grid">

                        {collections.map((item, index) => (
                            <div
                                key={index}
                                className={`collection-card ${item.className || ""}`}
                            >
                                <img src={item.image} alt={item.title} />

                                <div className="overlay">

                                    <h3>{item.title}</h3>

                                    {item.subtitle && <p>{item.subtitle}</p>}

                                    <Link to={`/collection/${item.handle}`}>
                                        {item.button}
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
            <section className="promise-section">
                <div className="container">
                    <div className="row align-items-center gy-5">

                        <div className="col-lg-5">
                            <div className="promise-content">

                                <span className="promise-subtitle">
                                    THE KANCHISUTHRA PROMISE
                                </span>

                                <h2>
                                    Every thread tells a
                                    <br />
                                    thousand-year-old story.
                                </h2>

                                <p>
                                    Our master weavers in Kanchipuram spend weeks hand-crafting
                                    each saree, ensuring the heritage of the "Sutra" lives on in
                                    every fold. Experience silk like never before.
                                </p>

                                <div className="row mt-5">

                                    <div className="col-6">
                                        <h4>100%</h4>
                                        <span>PURE MULBERRY SILK</span>
                                    </div>

                                    <div className="col-6">
                                        <h4>Hand</h4>
                                        <span>WOVEN ARTISTRY</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="col-lg-7 text-center">
                            <div className="promise-image">
                                <img
                                    src="https://images.unsplash.com/photo-1606760227091-3dd850d492a6?q=80&w=1200&auto=format&fit=crop"
                                    alt="Promise"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    );
}