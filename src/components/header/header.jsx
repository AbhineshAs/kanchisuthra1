import "./header.css";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";
import SearchModal from "../searchModal/searchModal";
import { useState } from "react";

const shopCategories = [
    {
        id: "silk",
        name: "SILK",
        path: "/collection/kanchivaram-silk",
        subcategories: [
            { name: "Kanchivaram Silks", path: "/collection/kanchivaram-silk" }
        ]
    },
    {
        id: "silk-cotton",
        name: "SILK COTTON",
        path: "/collection/kanchi-silk-cotton",
        subcategories: [
            { name: "Kanchi Silk Cotton", path: "/collection/kanchi-silk-cotton" },
            { name: "Kotta Silk Cotton", path: "/collection/kotta-silk-cotton" }
        ]
    },
    {
        id: "cotton",
        name: "COTTON",
        path: "/collection/kanchi-cotton",
        subcategories: [
            { name: "Kanchi Cotton", path: "/collection/kanchi-cotton" },
            { name: "Kotta Cotton", path: "/collection/kotta-cotton" }
        ]
    }
];

const occasionCategories = [
    { name: "Pravesh", path: "/occasion/pravesh" },
    { name: "Nithya", path: "/occasion/nithya" },
    { name: "Saar", path: "/occasion/saar" },
    { name: "Muhurta", path: "/occasion/muhurta" }
];

const currencies = [
    { label: "INR ₹ | India", code: "INR" },
    { label: "USD $ | United States", code: "USD" },
    { label: "EUR € | Europe", code: "EUR" },
    { label: "GBP £ | United Kingdom", code: "GBP" }
];

const Header = () => {
    const { cart } = useCart();
    const { isAuthenticated, customer } = useAuth();
    const location = useLocation();

    const [showSearch, setShowSearch] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Dropdown states
    const [expandedShopCat, setExpandedShopCat] = useState("silk");
    const [showCurrency, setShowCurrency] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    // Mobile accordion states
    const [mobileShopOpen, setMobileShopOpen] = useState(false);
    const [mobileOccasionOpen, setMobileOccasionOpen] = useState(false);
    const [mobileExpandedCat, setMobileExpandedCat] = useState("silk");

    const closeMenu = () => setMobileMenu(false);

    const toggleShopCat = (catId, e) => {
        e.stopPropagation();
        setExpandedShopCat(prev => (prev === catId ? null : catId));
    };

    const toggleMobileShopCat = (catId, e) => {
        e.stopPropagation();
        setMobileExpandedCat(prev => (prev === catId ? null : catId));
    };

    const isPathActive = (path) => {
        if (path === "/" && location.pathname === "/") return true;
        if (path !== "/" && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <>
            <header className="site-header">
                <div className="header-container">

                    {/* Mobile Hamburger Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenu(true)}
                        aria-label="Toggle navigation menu"
                    >
                        <i className="bi bi-list"></i>
                    </button>

                    {/* Desktop Left Nav Links */}
                    <nav className="header-nav-left">

                        {/* 1. Occasions */}
                        <div className="nav-dropdown-wrapper">
                            <Link
                                to="/occasion"
                                className={`nav-item-link ${isPathActive("/occasion") ? "active" : ""}`}
                            >
                                Occasions
                                <i className="bi bi-chevron-down nav-arrow"></i>
                            </Link>

                            <div className="dropdown-panel-menu simple-dropdown">
                                {occasionCategories.map((item, idx) => (
                                    <Link key={idx} to={item.path} className="simple-dropdown-link">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* 2. Collection (With Accordion Dropdown matching Image 2) */}
                        <div className="nav-dropdown-wrapper">
                            <Link
                                to="/collection"
                                className={`nav-item-link ${isPathActive("/collection") ? "active" : ""}`}
                            >
                                Collection
                                <i className="bi bi-chevron-down nav-arrow"></i>
                            </Link>

                            <div className="dropdown-panel-menu">
                                {shopCategories.map((cat) => {
                                    const isExpanded = expandedShopCat === cat.id;
                                    return (
                                        <div key={cat.id} className="dropdown-category-block">
                                            <div
                                                className={`dropdown-cat-header ${isExpanded ? "expanded" : ""}`}
                                                onClick={(e) => toggleShopCat(cat.id, e)}
                                            >
                                                <span>{cat.name}</span>
                                                <i className={`bi ${isExpanded ? "bi-chevron-up" : "bi-chevron-down"} cat-chevron`}></i>
                                            </div>

                                            {isExpanded && cat.subcategories && (
                                                <div className="dropdown-subcategories-list">
                                                    {cat.subcategories.map((sub, index) => (
                                                        <Link
                                                            key={index}
                                                            to={sub.path}
                                                            className="dropdown-sub-link"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 3. Materials */}
                        <Link
                            to="/fabrics"
                            className={`nav-item-link ${isPathActive("/fabrics") ? "active" : ""}`}
                        >
                            Materials
                        </Link>

                        {/* 4. Journal */}
                        <Link
                            to="/journal"
                            className={`nav-item-link ${isPathActive("/journal") ? "active" : ""}`}
                        >
                            Journal
                        </Link>

                        {/* 5. Our Story */}
                        <Link
                            to="/our-story"
                            className={`nav-item-link ${isPathActive("/our-story") || isPathActive("/heritage") ? "active" : ""}`}
                        >
                            Our Story
                        </Link>

                    </nav>

                    {/* Center Brand Logo */}
                    <div className="header-brand-logo">
                        <Link to="/">
                            <img src={logo} alt="Kanchisuthra" className="brand-logo-img" />
                        </Link>
                    </div>

                    {/* Desktop Right Utilities */}
                    <div className="header-nav-right">

                        {/* Currency Selector */}
                        <div className="currency-selector-wrapper">
                            <button
                                className="currency-btn"
                                onClick={() => setShowCurrency(!showCurrency)}
                            >
                                {selectedCurrency.label}
                                <i className="bi bi-chevron-down ms-1"></i>
                            </button>

                            {showCurrency && (
                                <div className="currency-dropdown-menu">
                                    {currencies.map((curr, idx) => (
                                        <div
                                            key={idx}
                                            className={`currency-option ${selectedCurrency.code === curr.code ? "selected" : ""}`}
                                            onClick={() => {
                                                setSelectedCurrency(curr);
                                                setShowCurrency(false);
                                            }}
                                        >
                                            {curr.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Search Icon */}
                        <button
                            className="header-icon-btn"
                            onClick={() => setShowSearch(true)}
                            title="Search"
                            aria-label="Search"
                        >
                            <i className="bi bi-search"></i>
                        </button>

                        {/* User Account Icon */}
                        <Link
                            to={isAuthenticated ? "/profile" : "/login"}
                            className="header-icon-btn"
                            title={isAuthenticated ? `Profile (${customer?.firstName || 'Account'})` : "Login / Account"}
                        >
                            <i className={`bi ${isAuthenticated ? "bi-person-check-fill" : "bi-person"}`}></i>
                        </Link>

                        {/* Cart Icon */}
                        <Link
                            to="/cart"
                            className="header-icon-btn cart-icon-wrapper"
                            title="Shopping Bag"
                        >
                            <i className="bi bi-bag"></i>
                            <span className="cart-badge-count">
                                {cart?.totalQuantity || 0}
                            </span>
                        </Link>

                    </div>

                </div>
            </header>

            {/* Mobile Navigation Drawer Overlay */}
            <div
                className={`mobile-backdrop ${mobileMenu ? "active" : ""}`}
                onClick={closeMenu}
            />

            {/* Mobile Drawer Navigation Sidebar */}
            <aside className={`mobile-drawer-sidebar ${mobileMenu ? "active" : ""}`}>

                <div className="mobile-drawer-header">
                    <img src={logo} alt="Kanchisuthra" className="mobile-logo-img brand-logo-img" />
                    <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <nav className="mobile-drawer-nav">

                    {/* 1. Occasions Accordion */}
                    <div className="mobile-accordion-section">
                        <div className="mobile-accordion-header">
                            <Link to="/occasion" onClick={closeMenu} className="mobile-parent-link">
                                Occasions
                            </Link>
                            <button
                                className="mobile-chevron-btn"
                                onClick={() => setMobileOccasionOpen(!mobileOccasionOpen)}
                            >
                                <i className={`bi ${mobileOccasionOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                            </button>
                        </div>

                        {mobileOccasionOpen && (
                            <div className="mobile-sub-accordion-container">
                                {occasionCategories.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        to={item.path}
                                        onClick={closeMenu}
                                        className="mobile-sublink"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 2. Collection Accordion */}
                    <div className="mobile-accordion-section">
                        <div className="mobile-accordion-header">
                            <Link to="/collection" onClick={closeMenu} className="mobile-parent-link">
                                Collection
                            </Link>
                            <button
                                className="mobile-chevron-btn"
                                onClick={() => setMobileShopOpen(!mobileShopOpen)}
                            >
                                <i className={`bi ${mobileShopOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                            </button>
                        </div>

                        {mobileShopOpen && (
                            <div className="mobile-sub-accordion-container">
                                {shopCategories.map((cat) => {
                                    const isExpanded = mobileExpandedCat === cat.id;
                                    return (
                                        <div key={cat.id} className="mobile-cat-group">
                                            <div
                                                className="mobile-cat-header"
                                                onClick={(e) => toggleMobileShopCat(cat.id, e)}
                                            >
                                                <span>{cat.name}</span>
                                                <i className={`bi ${isExpanded ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                                            </div>

                                            {isExpanded && cat.subcategories && (
                                                <div className="mobile-cat-sublinks">
                                                    {cat.subcategories.map((sub, idx) => (
                                                        <Link
                                                            key={idx}
                                                            to={sub.path}
                                                            onClick={closeMenu}
                                                            className="mobile-sublink"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* 3. Materials */}
                    <Link to="/fabrics" onClick={closeMenu} className="mobile-nav-link">
                        Materials
                    </Link>

                    {/* 4. Journal */}
                    <Link to="/journal" onClick={closeMenu} className="mobile-nav-link">
                        Journal
                    </Link>

                    {/* 5. Our Story */}
                    <Link to="/our-story" onClick={closeMenu} className="mobile-nav-link">
                        Our Story
                    </Link>

                    <Link to={isAuthenticated ? "/profile" : "/login"} onClick={closeMenu} className="mobile-nav-link">
                        {isAuthenticated ? `My Account (${customer?.firstName || 'Profile'})` : "Login / Register"}
                    </Link>

                </nav>

            </aside>

            {/* Search Modal */}
            <SearchModal
                show={showSearch}
                onClose={() => setShowSearch(false)}
            />
        </>
    );
};

export default Header;