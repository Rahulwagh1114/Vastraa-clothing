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
            setImgIndex(prev => (prev + 1) % images.length); // cycle through 0,1,2,0,1,2...
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className="heroPage">
            <img className="brandImages" src={images[imgIndex]} alt="" />
         </div>
        </>
    )
}

export default Hero