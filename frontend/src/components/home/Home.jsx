import Navbar from "../layouts/Navbar";
import Hero from "./Hero";
import './Home.css';
import Sections from "./Sections";
function Home(){
  return(
    <>
    <div className="homePage">
    <Navbar/>
    <Hero/>
    <Sections/>
    </div>
    </>
  )
}
export default Home;