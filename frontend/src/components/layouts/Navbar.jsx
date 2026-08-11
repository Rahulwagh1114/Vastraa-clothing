import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="brandName">
                <img className="brand" src="BrandName.png" alt="Vastraa" />
            </div>

            <div className="navLinks">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                </ul>
            </div>

            <div className="iconsDiv">
                <ul>
                    <li><a href="">Search</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Cart</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;