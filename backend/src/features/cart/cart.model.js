const mongoose = require("mongoose");

const CartSchema =  mongoose.Schema(
 {
    image: String,
    name: String,
    price1: Number,
    price2: Number,
    off: Number,
    userId:String,
    orderquantity:Number,
    productId:String,
    category: String,
    company: String,
 }
);
const  Cart = mongoose.model("cart", CartSchema);
module.exports ={Cart}
