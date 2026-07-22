import "./header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";
import SearchModal from "../searchModal/searchModal";
import { useState } from "react";

const Header = () => {
    const { cart } = useCart();
    const { isAuthenticated, customer } = useAuth();

    const [showSearch, setShowSearch] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showOccasion, setShowOccasion] = useState(false);
    const [showFabric, setShowFabric] = useState(false);
    const [showSilk, setShowSilk] = useState(false);
    const [showSilkCotton, setShowSilkCotton] = useState(false);
    const [showCotton, setShowCotton] = useState(false);
    const closeMenu = () => setMobileMenu(false);

    return (
        <>
            <header className="header">
                <div className="container-fluid px-5">

                    <div className="header-wrapper">

                        {/* Mobile Hamburger */}
                        <button
                            className="mobile-toggle"
                            onClick={() => setMobileMenu(true)}
                        >
                            <i className="bi bi-list"></i>
                        </button>

                        {/* Desktop Left */}
                        <nav className="header-left">

                            <div className="dropdown-menu-custom">
                                <Link to="/occasion" className="dropdown-trigger">
                                    Occasions
                                </Link>

                                <div className="dropdown-content">
                                    <Link to="/occasion/pravesh">Pravesh</Link>
                                    <Link to="/occasion/nithya">Nithya</Link>
                                    <Link to="/occasion/saar">Saar</Link>
                                    <Link to="/occasion/muhurta">Muhurta</Link>
                                </div>
                            </div>

                            <div className="dropdown-menu-custom">

                                <Link to="/fabrics" className="dropdown-trigger">
                                    Fabrics
                                </Link>

                                <div className="dropdown-content">

                                    <div className="dropdown-submenu">
                                        <Link to="/fabric/silk">Silk</Link>

                                        <div className="submenu-content">
                                            <Link to="/fabric/kanchivaram-silk">
                                                Kanchivaram Silk
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="dropdown-submenu">
                                        <Link to="/fabric/silk-cotton">
                                            Silk Cotton
                                        </Link>

                                        <div className="submenu-content">
                                            <Link to="/fabric/kanchi-silk-cotton">
                                                Kanchi Silk Cotton
                                            </Link>

                                            <Link to="/fabric/kotta-silk-cotton">
                                                Kotta Silk Cotton
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="dropdown-submenu">
                                        <Link to="/fabric/cotton">
                                            Cotton
                                        </Link>

                                        <div className="submenu-content">
                                            <Link to="/fabric/kanchi-cotton">
                                                Kanchi Cotton
                                            </Link>

                                            <Link to="/fabric/kotta-cotton">
                                                Kotta Cotton
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <Link to="/collection">
                                Collections
                            </Link>

                        </nav>

                        {/* Logo */}
                        <div className="header-logo">
                            <Link to="/">
                                <img src={logo} alt="Kanchisuthra" />
                            </Link>
                        </div>

                        {/* Desktop Right */}
                        <div className="header-right">

                            <Link to="/heritage">
                                Heritage
                            </Link>

                            <Link to="/craftsmanship">
                                Craftsmanship
                            </Link>

                            <i
                                className="bi bi-search"
                                onClick={() => setShowSearch(true)}
                            ></i>

                            <Link
                                to="/cart"
                                className="cart-icon position-relative"
                            >
                                <i className="bi bi-bag fs-5"></i>

                                <span className="cart-count">
                                    {cart?.totalQuantity || 0}
                                </span>

                            </Link>

                            <Link to={isAuthenticated ? "/profile" : "/login"} title={isAuthenticated ? `Profile (${customer?.firstName || 'Account'})` : "Login"}>
                                <i className={`bi ${isAuthenticated ? "bi-person-check-fill" : "bi-person"}`}></i>
                            </Link>

                        </div>

                    </div>

                </div>
            </header>

            {/* Overlay */}
            <div
                className={`mobile-overlay ${mobileMenu ? "show" : ""}`}
                onClick={closeMenu}
            />

            {/* Mobile Sidebar */}

            <aside className={`mobile-sidebar ${mobileMenu ? "show" : ""}`}>

                <div className="mobile-header">

                    <img src={logo} alt="" />

                    <button onClick={closeMenu}>
                        <i className="bi bi-x-lg"></i>
                    </button>

                </div>

                <nav className="mobile-nav">

                    <div className="mobile-dropdown-btn">

                        <Link
                            to="/occasion"
                            onClick={closeMenu}
                            className="mobile-parent-link"
                        >
                            Occasions
                        </Link>

                        <button
                            className="mobile-dropdown-btn"
                            onClick={() => setShowOccasion(!showOccasion)}
                        >
                            <i
                                className={`bi ${showOccasion ? "bi-chevron-up" : "bi-chevron-down"
                                    }`}
                            ></i>
                        </button>

                    </div>

                    {showOccasion && (

                        <div className="mobile-submenu">

                            <Link to="/occasion/pravesh" onClick={closeMenu}>Pravesh</Link>

                            <Link to="/occasion/nithya" onClick={closeMenu}>Nithya</Link>

                            <Link to="/occasion/saar" onClick={closeMenu}>Saar</Link>

                            <Link to="/occasion/muhurta" onClick={closeMenu}>Muhurta</Link>

                        </div>

                    )}

                    <div className="mobile-dropdown-btn">

                        <Link
                            to="/fabrics"
                            onClick={closeMenu}
                            className="mobile-parent-link"
                        >
                            Fabrics
                        </Link>

                        <button
                            className="mobile-dropdown-btn"
                            onClick={() => setShowFabric(!showFabric)}
                        >
                            <i
                                className={`bi ${showFabric ? "bi-chevron-up" : "bi-chevron-down"
                                    }`}
                            ></i>
                        </button>

                    </div>

                    {showFabric && (

                        <div className="mobile-submenu">

                            {/* Silk */}

                            <div className="mobile-sub-dropdown">

                                <div className="mobile-sub-header">

                                    <Link
                                        to="/fabric/silk"
                                        onClick={closeMenu}
                                        className="mobile-parent-link"
                                    >
                                        Silk
                                    </Link>

                                    <button
                                        className="mobile-arrow-btn"
                                        onClick={() => setShowSilk(!showSilk)}
                                    >
                                        <i className={`bi ${showSilk ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                                    </button>

                                </div>

                                {showSilk && (

                                    <div className="mobile-inner-submenu">

                                        <Link
                                            to="/fabric/kanchivaram-silk"
                                            onClick={closeMenu}
                                        >
                                            Kanchivaram Silk
                                        </Link>

                                    </div>

                                )}

                            </div>

                            {/* Silk Cotton */}

                            <div className="mobile-sub-dropdown">

                                <div className="mobile-sub-header">

                                    <Link
                                        to="/fabric/silk-cotton"
                                        onClick={closeMenu}
                                        className="mobile-parent-link"
                                    >
                                        Silk Cotton
                                    </Link>

                                    <button
                                        className="mobile-arrow-btn"
                                        onClick={() => setShowSilkCotton(!showSilkCotton)}
                                    >
                                        <i className={`bi ${showSilkCotton ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                                    </button>

                                </div>

                                {showSilkCotton && (

                                    <div className="mobile-inner-submenu">

                                        <Link
                                            to="/fabric/kanchi-silk-cotton"
                                            onClick={closeMenu}
                                        >
                                            Kanchi Silk Cotton
                                        </Link>

                                        <Link
                                            to="/fabric/kotta-silk-cotton"
                                            onClick={closeMenu}
                                        >
                                            Kotta Silk Cotton
                                        </Link>

                                    </div>

                                )}

                            </div>

                            {/* Cotton */}

                            <div className="mobile-sub-dropdown">

                                <div className="mobile-sub-header">

                                    <Link
                                        to="/fabric/cotton"
                                        onClick={closeMenu}
                                        className="mobile-parent-link"
                                    >
                                        Cotton
                                    </Link>

                                    <button
                                        className="mobile-arrow-btn"
                                        onClick={() => setShowCotton(!showCotton)}
                                    >
                                        <i className={`bi ${showCotton ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                                    </button>

                                </div>

                                {showCotton && (

                                    <div className="mobile-inner-submenu">

                                        <Link
                                            to="/fabric/kanchi-cotton"
                                            onClick={closeMenu}
                                        >
                                            Kanchi Cotton
                                        </Link>

                                        <Link
                                            to="/fabric/kotta-cotton"
                                            onClick={closeMenu}
                                        >
                                            Kotta Cotton
                                        </Link>

                                    </div>

                                )}

                            </div>

                        </div>

                    )}
                    <Link to="/collection" onClick={closeMenu}>
                        Collections
                    </Link>

                    <Link to="/heritage" onClick={closeMenu}>
                        Heritage
                    </Link>

                    <Link to="/craftsmanship" onClick={closeMenu}>
                        Craftsmanship
                    </Link>

                    <Link to={isAuthenticated ? "/profile" : "/login"} onClick={closeMenu}>
                        {isAuthenticated ? `My Account (${customer?.firstName || 'Profile'})` : "Login / Register"}
                    </Link>

                </nav>

            </aside>

            <SearchModal
                show={showSearch}
                onClose={() => setShowSearch(false)}
            />
        </>
    );
};

export default Header;