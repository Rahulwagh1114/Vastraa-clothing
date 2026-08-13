import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
    const [imgIndex, setImgIndex] = useState(0);

    const images = [
        "/comboBrand.png",
        "/menBrand.png",
        "/womenBrand.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="heroPage">
            {images.map((img, index) => (
                <img
                    key={index}
                    className={`brandImages ${index === imgIndex ? "active" : ""}`}
                    src={img}
                    alt=""
                />
            ))}


            <div className="heroDots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === imgIndex ? "activeDot" : ""}`}
                        onClick={() => setImgIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Hero;