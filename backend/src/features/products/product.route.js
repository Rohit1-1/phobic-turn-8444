const express = require("express");
const { find, findByIdAndDelete } = require("./product.model");
const {Product} = require("./product.model");
const { adminValidation } = require("../middleware/adminValidation");

module.exports = productRoute = express.Router();

productRoute.get("/", async (req, res) => {
  const { category, q, limit, page=1, sort, off, firstletter } = req.query;
  let totalData=await Product.find({ category: category })
  let totalPage=Math.floor(totalData.length/limit)
  try {
    if (category && sort) {
      if (sort == "asc") {
        let temp = await Product.find({ category: category })
          .sort({ price1: 1 })
          .limit(limit);
        return res.send(temp);
      } else if (sort == "desc") {
        let temp = await Product.find({ category: category })
          .sort({ price1: -1 })
          .limit(limit);
        return res.send(temp);
      }
    } else if (category && firstletter) {
      let temp = firstletter;
      let product = await Product.find({
        category: category,
        name: { $regex: "^" + temp, $options: "i" },
      }).limit();
      res.send(product);
    } else if (category && off) {
      if (off == "desc") {
        let discount = await Product.find({ category: category }).sort({
          off: -1,
        });
        res.send(discount);
      } else {
        const [min, max] = off.split(",").map(Number);
        let temp = await Product.find({
          category: category,
          $and: [{ off: { $gte: min } }, { off: { $lt: max } }],
        })
          .sort({ off: 1 })
          .limit(limit);
        res.send(temp);
      }
    } else if (category) {
      let product = await Product.find({ category: category })
        .limit(limit)
        .skip((page - 1) * limit);
        //console.log(totalPage)
      res.send({product,totalPage});
    } else if (q) {
      let query = new RegExp(q, "i");
      let searches = await Product.find({ name: query });
      console.log(searches);
      res.send(searches);
    } else if (firstletter) {
      let temp = firstletter;
      let product = await Product.find({
        name: { $regex: "^" + temp, $options: "i" },
      }).limit();
      res.send(product);
    } else {
      let AllProduct = await Product.find();
      res.send(AllProduct);
    }
  } catch (error) {
    console.log(error);
  }
  
});

productRoute.get("/allproduct",adminValidation,async(req, res) => {
      let load=req.query.num || 1;
  try {
    
    let AllProduct=await Product.find({}).limit(100*load)
  
    res.send(AllProduct);
  } catch (error) {
    console.log(error);
    res.status(404).send({"msg":"something went wrong"})
  }
});

productRoute.post("/allproduct",adminValidation, async(req, res) => {
      
  try {
    
    await Product.insertMany()
    res.send("done");
  } catch (error) {
    res.send({"msg":"something went wrong"})
  }
});

productRoute.patch("/allproduct",adminValidation, async(req, res) => {
      
  try {
    
    let AllProduct=await Product.find()
    res.send(AllProduct);
  } catch (error) {
    res.send({"msg":"something went wrong"})
  }
});


productRoute.delete("/allproduct/:id", adminValidation,async(req, res) => {
      let {id}=req.params;
     console.log('hello')
  try {
    
 await Product.findByIdAndRemove({_id:id})
     // console.log(prod);
    res.send({"msg":"Product removed successfully !"})
  } catch (error) {
    console.log(error);
     res.send({"msg":"something went wrong"})
  }
});


