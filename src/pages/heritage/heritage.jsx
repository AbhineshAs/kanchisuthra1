import { Link } from "react-router-dom";
import "./heritage.css";

import imgDSC07256 from "../../assets/images/DSC07358.JPG";
import imgDSC07377 from "../../assets/images/DSC07377.JPG";
import imgDSC07457 from "../../assets/images/DSC07457.JPG";
import imgDSC07488 from "../../assets/images/DSC07488.JPG";
import imgDSC07489 from "../../assets/images/DSC07489.JPG";
import imgDSC07586 from "../../assets/images/DSC07586.JPG";
import imgDSC07939 from "../../assets/images/DSC07939.JPG";

const stories = [
    {
        slug: "the-thread-of-kanchi",
        title: "A Celebration of Handloom, Heritage & Quiet Confidence",
        date: "January 24, 2026",
        image: imgDSC07256,
        description:
            "Founded by sisters Greeshma and Dr. Lakshmi from Thrissur, Kerala, Kanchisuthra was born from a shared belief that a handloom saree is never just fabric..."
    },


];

export default function Heritage() {
    return (
        <section className="heritage-list py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="text-uppercase fw-semibold" style={{ color: "#b88732", letterSpacing: "3px", fontSize: "12px" }}>
                        THE THREAD OF KANCHI • KANCHISUTHRA JOURNAL
                    </span>
                    <h1 className="mt-2 text-uppercase fw-normal" style={{ color: "#2b241d", letterSpacing: "2px" }}>
                        Heritage & Stories
                    </h1>
                    <div className="divider mx-auto my-3"></div>
                    <p className="text-muted max-w-600 mx-auto" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                        Discover our journal of handloom craftsmanship, sisterhood memories, and the timeless artistry behind every Kanchisuthra drape.
                    </p>
                </div>

                <div className="heritage-grid">
                    {stories.map((story) => (
                        <article className="heritage-card" key={story.slug}>
                            <Link to={`/journal/${story.slug}`} className="heritage-card-img-wrap">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-100"
                                />
                            </Link>

                            <div className="heritage-card-content mt-3">
                                <span>{story.date}</span>
                                <h2>{story.title}</h2>
                                <p>{story.description}</p>
                                <Link
                                    to={`/journal/${story.slug}`}
                                    className="read-more"
                                >
                                    Read Story →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}