import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";

function IndividualProduct(){
    const {id}=useParams();
    const [product ,setProduct]=useState(null);
    const [loader,setLoader]=useState(true);

    useEffect(()=>{
        const getProduct= async()=>{
        try{
            const response=await fetch(`http://localhost:8080/${id}`);
            const data = await response.json();
            setProduct(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false); // fix: setLoader, not setLoading
      }
    };
    getProduct();
    },[id]) // fix: id dependency add kiya

    if (loader) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    return(
        <>
        <Navbar />
         <div className="productDetailContainer">
        <img src={`${product.img}?w=600&q=70&auto=format`} alt={product.title} />
        <div className="productInfo">
          <h1>{product.title}</h1>
          <p>₹{product.price}</p>
        </div>
      </div>
        </>
    )
}
export default IndividualProduct;