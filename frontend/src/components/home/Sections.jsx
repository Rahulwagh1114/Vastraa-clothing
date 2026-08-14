import "./Sections.css";

function Sections() {
    const perks = [
        { icon: "fa-truck", title: "Free Delivery", desc: "On order over ₹599" },
        { icon: "fa-arrows-rotate", title: "Easy Returns", desc: "7 days return policy" },
        { icon: "fa-shield-halved", title: "Secure Payment", desc: "100% secure options" },
        { icon: "fa-headset", title: "24/7 Support", desc: "We are here to help" },
    ];

   const products = [
    { img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80", label: "Women" },
    { img: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?auto=format&fit=crop&w=600&q=80", label: "Men" },
    { img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", label: "Bags" },
    { img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", label: "Shoes" },
];

    return (
        <div className="sections">

            {/* Perks */}
            <div className="perksBar">
                {perks.map((perk, i) => (
                    <div className="perkCard" key={i}>
                        <div className="perkIcon">
                            <i className={`fa-solid ${perk.icon}`}></i>
                        </div>
                        <div>
                            <span>{perk.title}</span>
                            <p>{perk.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Collection banners */}
            <div className="collectionGrid">
                <div className="collectionCard">
                    <img src="/mens_collection_small.png" alt="Men's Collection" />
                    <div className="collectionOverlay">
                        <h3>Men's Collection</h3>
                        <button>Shop Now →</button>
                    </div>
                </div>
                <div className="collectionCard">
                    <img src="/womens_collection_small.png" alt="Women's Collection" />
                    <div className="collectionOverlay">
                        <h3>Women's Collection</h3>
                        <button>Shop Now →</button>
                    </div>
                </div>
            </div>

            {/* Category cards */}
            <div className="categoryHeading">
                <h2>Shop by Category</h2>
                <p>Find exactly what you're looking for</p>
            </div>

            <div className="categoryGrid">
                {products.map((item, i) => (
                    <div className="categoryCard" key={i}>
                        <div className="categoryImgWrap">
                            <img src={item.img} alt={item.label} />
                        </div>
                        <span className="categoryLabel">{item.label}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Sections;