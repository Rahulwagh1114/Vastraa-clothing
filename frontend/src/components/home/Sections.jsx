import "./Sections.css";
function Sections(){
    return(
       <>
       <div className="sections">
        <div className="sectionsIconsDiv">
            <div>
                <i className="fa-regular fa-truck"></i><span>Free Delivery</span>
                <p>On Order Over ₹599</p>
            </div>
             <div>
                <i className="fa-solid fa-circle-notch"></i><span>Easy Returns</span>
                <p>7 Days return Policy</p>
            </div>
             <div>
                <i className="fa-solid fa-shield"></i><span>Secure Payment</span>
                <p>100% Secure Payment Options</p>
            </div>
             <div>
               <i className="fa-solid fa-headset"></i><span>24/7 Support</span>
                <p>We are Here to Help</p>
            </div>
        </div>

        <div className="sectionsCard">
            <div>
                <img className="collectionImg" src="/mens_collection_small.png"></img>
            </div>
            <div>
                <img  className="collectionImg" id="sectionLady" src="/womens_collection_small.png"></img>
            </div>
        </div>
        

       <div className="cards">
        <div className="cardImg" id="ladyCard">
    <img src="https://res.cloudinary.com/kmejh5qg/image/upload/v1786458502/womenCard.png" alt="" />
    </div>
    <div className="cardImg" style={{marginLeft:"17px"}}>
    <img src="https://res.cloudinary.com/kmejh5qg/image/upload/v1786458502/menCard.png" alt="" />
    </div>
    <div className="cardImg">
    <img src="https://res.cloudinary.com/kmejh5qg/image/upload/v1786458738/bagCard.png" alt="" />
    </div>
    <div className="cardImg">
    <img src="https://res.cloudinary.com/kmejh5qg/image/upload/v1786458504/shoesCard.png" alt="" />
    </div>
</div>
       </div>
       </>
    )
}
export default Sections;