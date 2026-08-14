import Navbar from "../layouts/Navbar"
import Sidebar from "./Sidebar"
import "./Shop.css";
function Shop(){
  
    return(
       <>
       <Navbar/>
       <div className="shopTitle">
        <h1>Shop</h1>
        <p>Everything You Wear, All Here.</p>
       </div>
       <Sidebar/>
       </>
    )
}
export default Shop