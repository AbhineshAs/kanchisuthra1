import "./footer.css";


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
                        <h4>EXPLORE</h4>

                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">The Weaver's Art</a></li>
                            <li><a href="#">Bespoke Services</a></li>
                            <li><a href="collection">Collections</a></li>
                        </ul>
                    </div>

                    {/* Assistance */}
                    <div className="footer-links">
                        <h4>ASSISTANCE</h4>

                        <ul>
                            <li><a href="#">Care & Longevity</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
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
                            <button>
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