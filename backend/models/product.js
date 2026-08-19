import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    img:{
        type:String,
    },
    title:{
        type:String,
    },
    type:{
        type:String,
    },
    category:{
        type:String
    },
    price:{
        type:Number
    }
})
export default mongoose.model("Product",productSchema);