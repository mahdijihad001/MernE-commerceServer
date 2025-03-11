const express = require("express");
const ProductController = require("../controller/ProductController");
const productModel = require("../model/ProductModel");
const router = express.Router();



// ----------------------------Product Related Api ----------------------------------
// Get Product  Brand List
router.get("/productBrandList" , ProductController.ProductBrandList);
// Get Product Category List
router.get("/ProductCategoryList" , ProductController.ProductCategoryList);
// Get Product Slider 
router.get("/ProductSliderList" , ProductController.ProductSliderList);
// Get All Product Specific Brand
router.get("/ProductListByBrand/:brandID" , ProductController.ProductListByBrand);
// // Get All Product Specific Category
router.get("/ProductListByCategory/:categoryId" , ProductController.ProductListByCategory);
// // Get All Smilier Product
router.get("/ProductListBySmilier/:keyword" , ProductController.ProductListBySmilier);
// Product Remark example Trending Top Etc...
router.get("/ProductListByRemark/:remark" , ProductController.ProductListByRemark);
// Porduct Details
router.get("/ProductDetails/:productID" , ProductController.ProductDetails);
// Product Review List by Product ID
router.get("/ProductRewiewList/:productId" , ProductController.ProductRewiewList);

// get all product
// router.get("/allProduct" , async(req , res) =>{
//     const data = await productModel.find({});
//     res.status(200).send(data);

// })


module.exports = {router};