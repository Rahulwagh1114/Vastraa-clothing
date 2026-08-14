import { useState } from "react";
import "./Sidebar.css";
function Sidebar(){
    const [checked,setChecked]=useState(false)
    return(
        <>
        <div className="sidebar">
            <div className="categoriDiv">
         <h3>Categories</h3>
         <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Bag</li>
            <li>Shoes</li>
         </ul>
        </div>
        
        <div className="priceRangeDiv">
            <h4>Price Range</h4>
            <span><input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />  ₹300- ₹1000</span>
        <span> <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />   ₹1000- ₹2500</span>
        <span> <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />  ₹2500- ₹7000</span>
        <span> <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />  ₹7000 +</span>
        </div>

        </div>

        </>
    )
}
export default Sidebar;