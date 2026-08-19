import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.js";
import cors from "cors";
import "dotenv/config";

const app=express();
const port=8080;
app.use(cors());

 async function mongodb(){ 
 try{
  await mongoose.connect(process.env.MONGO_URL)
  console.log("connected to database");
 }catch(err){
    console.log(err);
 }
}
mongodb()

app.get("/allProducts", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12; // ek baar mein 12 products
        const skip = (page - 1) * limit;

        const allProducts = await Product.find()
            .skip(skip)
            .limit(limit);

        const totalProducts = await Product.countDocuments();

        res.json({
            products: allProducts,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: page
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port,()=>{
    console.log("port is listing");
})