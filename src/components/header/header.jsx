import "./header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import SearchModal from "../searchModal/searchModal";
import { useState } from "react";

const Header = () => {
    const { cart } = useCart();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <header className="header">
                <div className="container-fluid px-5">
                    <div className="header-wrapper">

                        {/* Left Menu */}
                        <nav className="header-left">
                            <div className="dropdown-menu-custom">
                                <Link to="/occasion" className="dropdown-trigger">
                                    Occasions
                                </Link>

                                <div className="dropdown-content">
                                    <Link to="/occasion/paravesh">Paravesh</Link>
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

                                    {/* Silk */}
                                    <div className="dropdown-submenu">
                                        <Link to="/fabrics/silk">Silk</Link>

                                        <div className="submenu-content">
                                            <Link to="/fabrics/silk/kanchivaram-silk">
                                                Kanchivaram Silk
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Silk Cotton */}
                                    <div className="dropdown-submenu">
                                        <Link to="/fabrics/silk-cotton">Silk Cotton</Link>

                                        <div className="submenu-content">
                                            <Link to="/fabrics/silk-cotton/kanchi-silk-cotton">
                                                Kanchi Silk Cotton
                                            </Link>
                                            <Link to="/fabrics/silk-cotton/kotta-silk-cotton">
                                                Kotta Silk Cotton
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Cotton */}
                                    <div className="dropdown-submenu">
                                        <Link to="/fabrics/cotton">Cotton</Link>

                                        <div className="submenu-content">
                                            <Link to="/fabrics/cotton/kanchi-cotton">
                                                Kanchi Cotton
                                            </Link>

                                            <Link to="/fabrics/cotton/kotta-cotton">
                                                Kotta Cotton
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>                            <Link to="/collection">Collections</Link>
                        </nav>

                        {/* Center Logo */}
                        <div className="header-logo">
                            <Link to="/">
                                <img src={logo} alt="Kanchisuthra" />
                            </Link>
                        </div>

                        {/* Right Menu */}
                        <div className="header-right">
                            <Link to="/heritage">Heritage</Link>
                            <Link to="/craftsmanship">Craftsmanship</Link>

                            <i
                                className="bi bi-search"
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowSearch(true)}
                            ></i>
                            <Link to="/cart" className="cart-icon position-relative">
                                <i className="bi bi-bag fs-5"></i>

                                <span className="cart-count">
                                    {cart?.totalQuantity || 0}
                                </span>
                            </Link>
                            <Link to="/profile">
                                <i className="bi bi-person"></i>
                            </Link>                        </div>

                    </div>
                </div>
            </header>
            <SearchModal
                show={showSearch}
                onClose={() => setShowSearch(false)}
            />
        </>
    );
};

export default Header;