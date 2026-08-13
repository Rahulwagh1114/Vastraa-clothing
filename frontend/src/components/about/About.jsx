import "./About.css";

function About() {
    return (
        <div className="about">

            {/* Hero */}
            <section className="aboutHero">
                <h1>Our Story</h1>
                <p>Woven with passion, tailored for you.</p>
            </section>

            {/* Story Section */}
            <section className="storySection">
                <div className="storyText">
                    <h2>Where It All Began</h2>
                    <p>
                        Vastraa was born from a simple idea — that clothing should feel as good
                        as it looks. What started as a small tailoring unit in the heart of the
                        city has today grown into a name synonymous with timeless style and
                        uncompromising quality.
                    </p>
                    <p>
                        Every piece we create carries a story of craftsmanship, passed down
                        through generations of skilled artisans. We blend traditional techniques
                        with modern silhouettes, creating fashion that speaks to who you are —
                        confident, elegant, and effortlessly you.
                    </p>
                    <p>
                        Today, Vastraa stands as more than just a brand. It's a promise —
                        of quality that lasts, style that endures, and a shopping experience
                        that feels personal.
                    </p>
                </div>
                <div className="storyImage">
                    <img src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmclMjBzaG9wfGVufDB8fDB8fHww" alt="Our Story" />
                </div>
            </section>

            {/* Shop Photo Section */}
            <section className="shopSection">
                <div className="shopImage">
                    <img src="https://images.unsplash.com/photo-1637228393246-c38a4b3d2011?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoaW5nJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
                <div className="shopText">
                    <h2>Step Into Our World</h2>
                    <p>
                        Our flagship store is designed to feel like a home away from home —
                        warm, inviting, and curated with care. Every corner reflects our
                        commitment to detail, from the fabrics on display to the way our
                        team welcomes you in.
                    </p>
                    <p>
                        Whether you're shopping for a special occasion or your everyday
                        wardrobe, our in-store stylists are here to help you find pieces
                        that truly fit your personality.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="valuesSection">
                <h2>What We Stand For</h2>
                <div className="valuesGrid">
                    <div className="valueCard">
                        <h3>Craftsmanship</h3>
                        <p>Every stitch reflects years of skill and dedication.</p>
                    </div>
                    <div className="valueCard">
                        <h3>Quality</h3>
                        <p>Only the finest fabrics make it into our collections.</p>
                    </div>
                    <div className="valueCard">
                        <h3>Sustainability</h3>
                        <p>Ethically sourced materials, responsibly made.</p>
                    </div>
                    <div className="valueCard">
                        <h3>Individuality</h3>
                        <p>Designs that let your personality shine through.</p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="statsSection">
                <div className="statBox">
                    <h2>10+</h2>
                    <p>Years of Excellence</p>
                </div>
                <div className="statBox">
                    <h2>50K+</h2>
                    <p>Happy Customers</p>
                </div>
                <div className="statBox">
                    <h2>200+</h2>
                    <p>Unique Designs</p>
                </div>
                <div className="statBox">
                    <h2>15+</h2>
                    <p>Cities Served</p>
                </div>
            </section>

            {/* CTA */}
            <section className="ctaSection">
                <h2>Discover the Vastraa Experience</h2>
                <p>Explore our latest collection and find your perfect fit.</p>
                <button>Shop Now</button>
            </section>

        </div>
    );
}

export default About;