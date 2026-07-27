import "./ourStory.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function OurStory() {
    const [activeFounder, setActiveFounder] = useState("greeshma");

    return (
        <div className="our-story-unique-page">
            {/* Unique Asymmetric Split Hero */}
            <section className="our-story-section">
                <div className="container">
                    <div className="our-story-content">
                        <h1>Our Story</h1>

                        <p>
                            Kanchisutra is a celebration of handloom, heritage, and the quiet confidence of a woman who knows what she is wearing.</p>

                        <p>
                            Founded by sisters Greeshma and Dr. Lakshmi from Thrissur, Kerala, the brand was born from a shared belief — that a handloom saree is never just fabric. It carries the memory of the hands that wove it, the tradition of the region it came from, and the story of every woman who has worn it before you.
                        </p>

                        <p>
                            The name Kanchisutra means the thread of Kanchi — but for us, it means something wider. It is the thread that connects a weaver's loom to your hands. We believe that thread should never be broken by shortcuts.
                        </p>

                        <p>
                            The name Kanchisutra means the thread of Kanchi — but for us, it means something wider. It is the thread that connects a weaver's loom to your hands. We believe that thread should never be broken by shortcuts.
                        </p>
                        <p>
                            We work in small, considered quantities, choosing depth over volume and preserving the integrity of slow craft. From everyday cottons to heirloom silks, each piece is selected for its character, its weave, and the quiet story it carries within it.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
