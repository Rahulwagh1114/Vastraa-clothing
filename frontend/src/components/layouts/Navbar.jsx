import { useState, useEffect } from "react";
import "./Navbar.css";
import {Link,useLocation,useNavigate} from "react-router-dom";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink]=useState('home')
        const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


   useEffect(()=>{
    if(location.pathname==="/shop"){
        setActiveLink("shop");
    }
},[location])

     const scrollToTop = (e) => {
        e.preventDefault();
        setActiveLink("home")
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
          setActiveLink("about");
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
                    <li><a href="/" className={activeLink==='home'?'active':''} onClick={scrollToTop}>Home</a></li>
                   <li><a href="#about" className={activeLink==='about'?'active':''} onClick={scrollToAbout}>About</a></li>
                     <li> <Link 
                            className={activeLink === 'shop' ? 'active' : ''} 
                            to="/shop" 
                            onClick={() => setActiveLink('shop')}
                        >
                            Shop
                        </Link></li>
                </ul>
            </div>

            <div className="searchBox">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className="searchInp" type="text" placeholder="Search products..." />
            </div>

            <div className="iconsDiv">
                <ul>
                    <li>
                        <a href="#" title="Account">
                            <i className="fa-solid fa-user"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cartLink" title="Cart">
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