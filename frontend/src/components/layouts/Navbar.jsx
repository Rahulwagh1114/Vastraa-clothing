import { useState, useEffect } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


     const scrollToTop = (e) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };


    const scrollToAbout = (e) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            // agar kisi aur page pe ho to pehle home aayein, phir scroll karein
            navigate("/");
            setTimeout(() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="brandName">
                <img className="brand" src="BrandName.png" alt="Vastraa" />
            </div>

            <div className="navLinks">
                <ul>
                    <li><a href="/" onClick={scrollToTop}>Home</a></li>
                   <li><a href="#about" onClick={scrollToAbout}>About</a></li>
                     <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/shop">Men</Link></li>
                    <li><Link to="/shop">Women</Link></li>
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