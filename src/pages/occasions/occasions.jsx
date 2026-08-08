import "./occasions.css";

import occasionHero from "../../assets/images/DSC07586.JPG";
import weddingImg from "../../assets/images/DSC07488.JPG";
import festiveImg from "../../assets/images/DSC07489.JPG";
import dailyImg from "../../assets/images/DSC07457.JPG";

const collections = [
    {
        title: "Muhurta - Wedding Collection",
        category: "THE BRIDAL EDIT",
        image: weddingImg,
        reverse: false,
        button: "EXPLORE COLLECTION",
        description:
            "Celebrate your most significant milestone with sarees defined by heavy gold zari work and regal motifs. Our bridal collection is curated to make every bride feel like a manifestation of heritage and grace.",
        quote:
            "Where gold threads meet the sacred flame, a tapestry of eternal union is born."
    },
    {
        title: "Sobha - Festive Collection",
        category: "THE FESTIVE EDIT",
        image: festiveImg,
        reverse: true,
        button: "VIEW COLLECTION",
        description:
            "Celebrate every festival with handcrafted silk woven to illuminate life's grandest celebrations.",
        quote:
            "A celebration deserves a weave that shines as brightly as the occasion."
    },
    {
        title: "Pratidina - Everyday Wear",
        category: "THE DAILY EDIT",
        image: dailyImg,
        reverse: false,
        button: "DISCOVER COLLECTION",
        description:
            "Elegant everyday sarees designed to accompany your quiet moments with effortless grace.",
        quote:
            "Luxury isn't reserved for special occasions. It belongs in everyday life."
    }
];
export default function Occasions() {
    return (
        <>
            <section
                className="occasion-hero"
                style={{ backgroundImage: `url(${occasionHero})` }}
            >
                <div className="occasion-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-8 text-center hero-content">

                            <span className="hero-subtitle">
                                THE ART OF OCCASIONS
                            </span>

                            <h1>Woven for Every Occasion</h1>

                            <p>
                                From the sacred vows of a wedding to the quiet elegance of
                                daily rituals, find the weave that honours your most precious
                                milestones.
                            </p>

                            <a href="#" className="hero-btn">
                                DISCOVER THE WEAVES
                            </a>

                        </div>
                    </div>
                </div>

                <div className="scroll-down">
                    <i className="bi bi-chevron-down"></i>
                </div>
            </section>
            <section className="occasion-collections">
                <div className="container">

                    {collections.map((item, index) => (

                        <div
                            key={index}
                            className={`row align-items-center py-5 ${item.reverse ? "flex-lg-row-reverse" : ""
                                }`}
                        >

                            <div className="col-lg-6">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="img-fluid collection-image"
                                />
                            </div>

                            <div className="col-lg-6">

                                <div className="collection-content">

                                    <span>{item.category}</span>

                                    <h2>{item.title}</h2>

                                    <blockquote>
                                        "{item.quote}"
                                    </blockquote>

                                    <p>{item.description}</p>

                                    <button className="collection-btn">
                                        {item.button}
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            </section>
            {/* Wardrobe Support */}

            <section className="wardrobe-support">
                <div className="container">

                    <div className="text-center">

                        <span className="support-subtitle">
                            PERSONALIZED GUIDANCE
                        </span>

                        <h2>Wardrobe Support</h2>

                        <p className="support-text">
                            Unsure which weave best suits your celebration? Our master
                            stylists are here to guide you through the intricacies of zari,
                            fabric weights, and colour palettes.
                        </p>

                    </div>

                    <div className="row mt-5 justify-content-center">

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

                            <div className="support-card">

                                <i className="bi bi-calendar-check"></i>

                                <h5>Book a Session</h5>

                                <p>
                                    Personalized 30-minute virtual consultation.
                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

                            <div className="support-card">

                                <i className="bi bi-palette"></i>

                                <h5>Color Swatches</h5>

                                <p>
                                    Request silk thread samples for your custom bridal order.
                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

                            <div className="support-card">

                                <i className="bi bi-pencil"></i>

                                <h5>Draping Guide</h5>

                                <p>
                                    Access our exclusive tutorials for regional draping
                                    styles.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="text-center mt-4">

                        <button className="support-btn">
                            BEGIN YOUR STYLING JOURNEY
                        </button>

                    </div>

                </div>
            </section>
        </>
    );
}