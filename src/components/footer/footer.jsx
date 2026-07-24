import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2>KANCHISUTHRA</h2>

                        <p>
                            Curating a pristine taste profile that embodies everything good
                            about the past, for the evolving present and the future heritage.
                        </p>

                        <div className="social-icons">
                            <a href="#">
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