import Navbar from "../layouts/Navbar"
import Sidebar from "./Sidebar"
import "./Shop.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Shop() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate =useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/allProducts?page=${page}&limit=12`);
        const allProducts = await response.json();
        setProducts(allProducts.products);
        setTotalPages(allProducts.totalPages);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [page]);

const handleCardClick=(id)=>{
 navigate(`/${id}`)
}

  return (
    <>
      <Navbar />
      <div className="shopTitle">
        <h1>Shop</h1>
        <p>Everything You Wear, All Here.</p>
      </div>
      <Sidebar />
      <div className="allProductsDiv">
        {loading ? (
          <div className="loaderContainer">
            <div className="loader"></div>
          </div>
        ) : (products.map((product) => (
          <div onClick={()=>handleCardClick (product._id)} className="productCard" key={product._id}>
            <img src={`${product.img}?w=400&q=60&auto=format`} loading="lazy" alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        )))}<br />
        <div className="nextPreBtn">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
           <i className="fa-solid fa-angles-left"></i> Previous
          </button>

          <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
             Next <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>


    </>
  )
}
export default Shop