import About from "../about/About";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Hero from "./Hero";
import "./Home.css";
import Sections from "./Sections";

function Home() {
    return (
        <div className="homePage">
            <Navbar />
            <Hero />
            <Sections />
               <div id="about">
                <About />
            </div>
            <Footer />
        </div>
    );
}

export default Home;