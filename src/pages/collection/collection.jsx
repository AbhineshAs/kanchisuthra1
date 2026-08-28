import "./collection.css";
import { Link } from "react-router-dom";

import weddingImg from "../../assets/images/DSC02752.JPG";
import festiveImg from "../../assets/images/DSC07870.JPG";
import dailyImg from "../../assets/images/ELF6DSC01588.JPG";
import tussarImg from "../../assets/images/brown.JPG";
import fusionImg from "../../assets/images/red-green.JPG";
import promiseImg from "../../assets/herosection/DSC07682.JPG";

const collections = [
    {
        title: "Muhurta - Wedding Collection",
        handle: "wedding-collection",
        subtitle:
            "Celestial weaves for eternal unions, crafted with pure gold zari and the finest mulberry silk.",
        button: "Explore Collection",
        image: weddingImg,
        className: "large",
    },
    {
        title: "Sobha - Festive Collection",
        handle: "festive",
        button: "View More",
        image: festiveImg,
        className: "tall",
    },
    {
        title: "Pratidina - Daily Wear",
        handle: "daily-wear",
        button: "Shop Now",
        image: dailyImg,
    },
    {
        title: "Tussars & Organzas",
        handle: "tussars-organzas",
        button: "Explore",
        image: tussarImg,
    },
    {
        title: "Fusion",
        handle: "fusion",
        button: "View Gallery",
        image: fusionImg,
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
                                    src={promiseImg}
                                    alt="The Kanchisuthra Promise"
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