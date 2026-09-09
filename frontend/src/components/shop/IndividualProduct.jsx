import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import './individualProduct.css';

function IndividualProduct(){
    const {id}=useParams();
    const [product ,setProduct]=useState(null);
    const [loader,setLoader]=useState(true);
    const [formInput,setFormInput]=useState(
      {
        name:"",
        mobile:"",
        email:"",
        house:"",
        area:"",
        city:"",
        pincode:"",
        state:"",
      }
    );
    const [address,setAddress]=useState([]);

    const handleInput = (e) => {
       const { name, value } = e.target;
       setFormInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
      e.preventDefault(); // fix: capital D
      setAddress((prev) => [...prev, formInput]); // fix: array me push, object spread nahi
      setFormInput({ // fix: form reset after submit
        name:"",
        mobile:"",
        email:"",
        house:"",
        area:"",
        city:"",
        pincode:"",
        state:"",
      });
    };

    useEffect(()=>{
        const getProduct= async()=>{
        try{
            const response=await fetch(`http://localhost:8080/${id}`);
            const data = await response.json();
            setProduct(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    };
    getProduct();
    },[id])

    if (loader) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    return(
        <>
<Navbar />
<div className="pageWrapper">
  <div className="productDetailContainer">
    <div className="imageBox">
      <img src={`${product.img}?w=600&q=70&auto=format`} alt={product.title} />
    </div>

    <div className="productInfo">
      <h3>{product.title}</h3>
      <p className="price">₹{product.price}</p>
      <p className="stockStatus">In Stock</p>

      <div className="orderCard">
        <h3>Place Order</h3>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder="Enter name" value={formInput.name} onChange={handleInput} />
          <input type="email" name="email" placeholder="Enter email" value={formInput.email} onChange={handleInput}/>
          <input type="text" name="mobile" placeholder="Enter Mobile No." value={formInput.mobile} onChange={handleInput}/>
          <input type="text" name="house" placeholder="House / Flat / Building No." value={formInput.house} onChange={handleInput} />
          <input name="area" placeholder="Street / Area / Locality" value={formInput.area} onChange={handleInput} />
          <input type="text" name="city" placeholder="City" value={formInput.city} onChange={handleInput} />
          <input type="text" name="pincode" placeholder="Pincode" value={formInput.pincode} onChange={handleInput} />
          <input type="text" name="state" placeholder="State" value={formInput.state} onChange={handleInput} />
          <button type="submit">Save Address & Order</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default IndividualProduct;