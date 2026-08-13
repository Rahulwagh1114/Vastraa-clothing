import "./Sections.css";

function Sections() {
    const perks = [
        { icon: "fa-truck", title: "Free Delivery", desc: "On order over ₹599" },
        { icon: "fa-arrows-rotate", title: "Easy Returns", desc: "7 days return policy" },
        { icon: "fa-shield-halved", title: "Secure Payment", desc: "100% secure options" },
        { icon: "fa-headset", title: "24/7 Support", desc: "We are here to help" },
    ];

    const products = [
        { img: "https://res.cloudinary.com/kmejh5qg/image/upload/v1786458502/womenCard.png", label: "Women" },
        { img: "https://res.cloudinary.com/kmejh5qg/image/upload/v1786458502/menCard.png", label: "Men" },
        { img: "https://res.cloudinary.com/kmejh5qg/image/upload/v1786458502/bagCard.png", label: "Bags" },
        { img: "https://res.cloudinary.com/kmejh5qg/image/upload/v1786458504/shoesCard.png", label: "Shoes" },
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
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Sections;