import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2>OurStory</h2>

                        <p>
                            Kanchisutra is a celebration of handloom, heritage, and the quiet confidence of a woman who knows what she is wearing. Founded by sisters Greeshma and Dr. Lakshmi from Thrissur, Kerala, the brand was born from a shared belief — that a handloom saree is never just fabric. It carries the memory of the hands that wove it, the tradition of the region it came from, and the story of every woman who has worn it before you.
                        </p>

                        <div className="social-icons">
                            <a href="https://www.instagram.com/kanchisutra/?utm_source=ig_web_button_share_sheet">
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a href="#">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="footer-links">
                        <h4><u>EXPLORE</u></h4>

                        <ul>
                            <li><Link to="/occasion">Occasions</Link></li>
                            <li><Link to="/collection">Collection</Link></li>
                            <li><Link to="/fabrics">Materials</Link></li>
                            <li><Link to="/journal">Journal</Link></li>
                            <li><Link to="/our-story">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="newsletter">
                        <h4>NEWSLETTER</h4>

                        <p>Be the first to know about heritage drops.</p>

                        <div className="newsletter-box">
                            <input
                                type="email"
                                placeholder="Your email address"
                            />
                            <button onClick={() => window.open("https://mail.google.com", "_blank")}>
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © 2024 Kanchisuthra Heritage Textiles. All rights reserved.
                    </p>

                    <div className="payment-icons">
                        <i className="bi bi-credit-card"></i>
                        <i className="bi bi-credit-card-2-front"></i>
                        <i className="bi bi-wallet2"></i>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;