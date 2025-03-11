const mongoose = require("mongoose");
const brandModel = require("../model/BrandModel");
const categoryModel = require("../model/CategoryModel");
const productDetailsModel = require("../model/ProductDetailModel");
const productModel = require("../model/ProductModel");
const productSliderModel = require("../model/ProductSliderModel");
const reviewModel = require("../model/ReviewModel");


// Get All Brand 
const BrandListServices = async () => {
    try {
        const data = await brandModel.find({});

        return { status: "success", data: data };

    } catch (error) {
        return { status: "fail", data: error.message || "Something went wrong!" };
    }
}
// Get All Category 
const CategoryListServices = async () => {
    try {

        const data = await categoryModel.find({});

        return { status: "success", data: data };

    } catch (error) {
        return { status: "fail", data: error.message || "Something went wrong" }
    }
}
// Get All Slider
const SliderListServices = async () => {
    try {

        const data = await productSliderModel.find({});

        return { status: "success", data: data };

    } catch (error) {
        return { status: "fail", data: error.message || "Something went wrong" }
    }
}
// // Get Product List Specific Brand 
const ListByBrandServices = async (brandId) => {
    try {
        const id = new mongoose.Types.ObjectId(brandId);
        const matchStage = { $match: { brand_id: id } };
        const joinBrandModel = { $lookup: { from: "brands", localField: "brand_id", foreignField: "_id", as: "brand" } };
        const joinCategoryModel = { $lookup: { from: "categorys", localField: "category_id", foreignField: "_id", as: "category" } };
        const unwindBrand = { $unwind: { path: "$brand", preserveNullAndEmptyArrays: true }}
        const unwindCategory = { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } }
        const data = await productModel.aggregate([matchStage, joinBrandModel, joinCategoryModel, unwindBrand, unwindCategory]);
        return { status: "success", data: data };

    } catch (error) {
        return { status: "faild", data: "Something went wrong" }
    }
}



// Get Product List Specific Category 
const ListByCategoryServices = async () => {

}
// Get Product by smiler Product
const ListBySmilierServices = async () => {

}
// User Search product
const ListByKeywordServices = async () => {

}
// Product List by remark Examole Trending top Special Etc ...
const ListByRemarkServices = async () => {

}
// Get Product Details
const DetaildServices = async () => {

}
// Get Single Product Review List Services
const ProductReviewListServices = async () => {

}



module.exports = {
    BrandListServices,
    CategoryListServices,
    SliderListServices,
    ListByBrandServices,
    ListByCategoryServices,
    ListBySmilierServices,
    ListByKeywordServices,
    ListByRemarkServices,
    DetaildServices,
    ProductReviewListServices
}



