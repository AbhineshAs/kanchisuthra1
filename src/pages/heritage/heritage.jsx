import { Link } from "react-router-dom";
import "./heritage.css";
import homeBanner from "../../assets/images/home-banner.png";
const stories = [
    {
        slug: "the-thread-of-kanchi",
        title: "A Celebration of Handloom, Heritage & Quiet Confidence",
        date: "January 24, 2026",
        image: homeBanner,
        description:
            "Founded by sisters Greeshma and Dr. Lakshmi from Thrissur, Kerala, Kanchisuthra was born from a shared belief that a handloom saree is never just fabric..."
    }
];

export default function HeritageDetail() {
    return (
        <section className="heritage-list py-5">
            <div className="container">

                {stories.map((story) => (

                    <article className="heritage-card" key={story.slug}>

                        <Link to={`/journal/${story.slug}`}>

                            <img
                                src={story.image}
                                alt={story.title}
                                className="w-100"
                            />

                        </Link>

                        <div className="heritage-card-content">

                            <h2 className="pt-3">{story.title}</h2>

                            <span>{story.date}</span>

                            <p>{story.description}</p>

                            <Link
                                to={`/journal/${story.slug}`}
                                className="read-more "
                            >
                                Read Story →
                            </Link>

                        </div>

                    </article>

                ))}

            </div>
        </section>
    );
}