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
                            <Link to="/occasion">Occasions</Link>
                            <Link to="/fabrics">Fabrics</Link>
                            <Link to="/collection">Collections</Link>
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