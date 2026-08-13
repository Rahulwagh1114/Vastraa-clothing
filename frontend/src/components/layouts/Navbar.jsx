import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="brandName">
                <img className="brand" src="BrandName.png" alt="Vastraa" />
            </div>

            <div className="navLinks">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                </ul>
            </div>

            <div className="searchBox">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className="searchInp" type="text" placeholder="Search products..." />
            </div>

            <div className="iconsDiv">
                <ul>
                    <li>
                        <a href="" title="Account">
                            <i className="fa-solid fa-user"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" className="cartLink" title="Cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="cartBadge">2</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;