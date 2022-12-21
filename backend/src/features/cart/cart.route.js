const express = require("express");
const cartRoute = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../auth/auth.model");
const {Cart} = require("./cart.model");
const {Product} = require("../products/product.model");
require('dotenv').config()

const authMiddleWare = async (req, res, next) => {
 // console.log(req.body,'po');
    const token = req.headers.authorization?.split(" ")[1]
  // console.log(typeof(token),'vald');
    try {
       
        var decoded = jwt.verify(token,process.env.SECRET_KEY);
        if(decoded){
            req.body.userId=decoded.userId
         // console.log(req.body,'vdddddd');
            next()
        }
        else{
            res.send({"msg":"Not authorised1"})
        }
      
       
    } catch (error) {
      console.log(error);
        res.send({"msg":"Not authorised"})
    }
};

cartRoute.use(authMiddleWare);


cartRoute.post("/addtocart",async(req,res)=>{
  let {userId}=req.body;
  const payload=req.body;
  const {id}=req.body;
  const {orderquantity}=req.body;
  console.log(payload);
  const addData={...payload,productId:id,userId}
  console.log(userId,id);
  try {
     const prod=await Cart.find({productId:id,userId})
    // console.log(prod,id);
     if(prod.length>0){
      res.send({"msg":"Already in cart"})
     }
     else{
      let cartdata= new Cart(addData)
      await  cartdata.save()
     await Product.findByIdAndUpdate({ _id:id}, {$inc:{quantity: -orderquantity}})
     res.send({"msg":"Added to cart"})
     }
    
  } catch (error) {
    console.log(error);
    res.send({'msg':"Something went wrong"})
  }
})

cartRoute.get("/cartproduct",async(req,res)=>{
  let {userId}=req.body;
  
  //console.log(userId);
  try {
    const cartproduct=await Cart.find({userId})
   
    res.send(cartproduct)
  } catch (error) {
    console.log(error);
    res.send({'msg':"Something went wrong"})
  }
})



cartRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const productId=req.headers.productid
  const {userId}=req.body
  const orderquantity=+req.headers.orderquantity;
 // console.log("Id:",'productId',req.headers,typeof(orderquantity));
  try {
     await Cart.deleteOne({userId,_id:id})
    await Product.findByIdAndUpdate(
      { _id: productId},
      { $inc: { quantity: orderquantity } }
    );
    res.send({"msg":"Item deleted Successfully"});
  } catch (error) {
    console.log(error);
    res.send({ err: "Something went wrong" });
  }
});


cartRoute.patch("/addmore", async (req, res) => {
  let {userId}=req.body;
  const {id}=req.body;
  const {productId}=req.body;
  const {orderquantity}=req.body;
  const {type}=req.body
  console.log(userId,id,orderquantity);
 
  try {
    let prod=await Product.findById({_id:productId})
    console.log(prod.quantity);
     
    if(prod.quantity===0&type!=='dec'){
      res.send({"msg":"Out of stock"})
    }
    else if(type==='inc'){
      await Cart.updateOne({_id:id,userId},{$inc:{orderquantity: orderquantity}})
      await Product.findByIdAndUpdate({ _id:productId}, {$inc:{quantity: -orderquantity}})
        res.send({"msg":"Added more"})
    }
    else if(type==='dec'){
      // console.log(type,'dec');   
       await Cart.updateOne({_id:id,userId},{$inc:{orderquantity: -orderquantity}})
      await Product.findByIdAndUpdate({ _id:productId}, {$inc:{quantity: +orderquantity}})
        res.send({"msg":"Quantity decs"})
    }
    else{
      res.send({'msg':"Something went wrong"})
    }
 
     
    
  } catch (error) {
    console.log(error);
    res.send({'msg':"Something went wrong"})
  }
});


cartRoute.delete("/orderplaced/:id", async (req, res) => {
  let {userId}=req.body;
console.log(userId);
  try {
     await Cart.deleteMany({userId})

    res.send({'msg':"Order Placed"})
  
  } catch (error) {
    console.log(error);
    res.send({'msg':"Something went wrong"})
  }
});






// cartRoute.post("", async (req, res) => {
//   try {
//     let dbProduct = await Product.findOne({ _id: req.body.product });
//     let cartItem = await Cart.findOne({ product: req.body.product });
//     if (cartItem) {
//       if (req.body.type == "inc") {
//         if (Check(dbProduct, req.body.quantity)) {
//           return res.send(
//             `Database have only ${dbProduct.quantity} of this item`
//           );
//         } else {
//           let cart = await Cart.findOneAndUpdate(
//             { product: req.body.product },
//             { $inc: { quantity: 1 } }
//           );
//           await Product.findByIdAndUpdate(
//             { _id: req.body.product },
//             { $inc: { quantity: -1 } }
//           );
//           return res.send(cart);
//         }
//       } else if (req.body.type == "dec") {
//         if (cartItem.quantity == 1) {
//           await Cart.findOneAndDelete({ product: req.body.product });
//           await Product.findByIdAndUpdate(
//             { _id: req.body.product },
//             { $inc: { quantity: 1 } }
//           );
//           return res.send("Deleted");
//         } else {
//           let cart = await Cart.findOneAndUpdate(
//             { product: req.body.product },
//             { $inc: { quantity: -1 } }
//           );
//           await Product.findByIdAndUpdate(
//             { _id: req.body.product },
//             { $inc: { quantity: 1 } }
//           );
//           return res.send(cart);
//         }
//       } else if (req.body.type == "" || !req.body.type) {
//         return res.send("Type is missing");
//       }
//     } else {
//       if (Check(dbProduct, req.body.quantity)) {
//         return res.send(
//           `Database have only ${dbProduct.quantity} of this item`
//         );
//       } else {
//         let cartItem = await Cart.create({
//           ...req.body,
//           user: req.userId,
//         });
//         await Product.findByIdAndUpdate(
//           { _id: req.body.product },
//           { $inc: { quantity: -1 } }
//         );
//         return res.send(cartItem);
//       }
//     }
//   } catch (e) {
//     res.send(e.message);
//   }
// });

// function Check(dbProduct, qty) {
//   // console.log("Quantity", qty);
//   if (dbProduct.quantity < qty) {
//     return true;
//   } else {
//     return false;
//   }
// }


// cartRoute.get("", async (req, res) => {
//   try {
//     let carts = await Cart.find({ user: req.userId }).populate([
//       {
//         path: "user",
//         select: ["name", "email", "user_image", "address", "role", "pincode"],
//       },
//       "product",
//     ]);
//     res.send(carts);
//   } catch (e) {
//     res.send(e.message);
//   }
// });
module.exports = cartRoute;
