import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footerTop">

                {/* Brand + Newsletter */}
                <div className="footerBrand">
                    <h2>Vastraa</h2>
                    <p>Timeless fashion, crafted for you.</p>

                    <div className="newsletter">
                        <p className="newsletterTitle">Subscribe to our newsletter</p>
                        <div className="newsletterInput">
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                    <div className="socialIcons">
                        <a href="">FB</a>
                        <a href="">IG</a>
                        <a href="">TW</a>
                        <a href="">PIN</a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footerLinks">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>

                {/* Shop */}
                <div className="footerLinks">
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="">Men</a></li>
                        <li><a href="">Women</a></li>
                        <li><a href="">New Arrivals</a></li>
                        <li><a href="">Best Sellers</a></li>
                        <li><a href="">Offers</a></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="footerLinks">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="">Track Order</a></li>
                        <li><a href="">Returns & Exchange</a></li>
                        <li><a href="">Shipping Policy</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footerContact">
                    <h4>Get in Touch</h4>
                    <p>📍 Nagpur, Maharashtra, India</p>
                    <p>📞 +91 98765 43210</p>
                    <p>✉️ support@vastraa.com</p>
                </div>

            </div>

            {/* Payment Methods */}
            <div className="paymentMethods">
                <p>We Accept:</p>
                <div className="paymentIcons">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>UPI</span>
                    <span>PayPal</span>
                    <span>COD</span>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footerBottom">
                <p>&copy; {new Date().getFullYear()} Vastraa. All Rights Reserved.</p>
                <div className="footerBottomLinks">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Use</a>
                    <a href="">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;