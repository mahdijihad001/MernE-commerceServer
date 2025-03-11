const { model, default: mongoose } = require("mongoose");
const { BrandListServices, CategoryListServices, SliderListServices, ListByBrandServices } = require("../services/ProductServices");
const productModel = require("../model/ProductModel");

// Get all Brand list Controller
exports.ProductBrandList = async(req , res) =>{
    const result = await BrandListServices();

    if(result.status === "success" && result.data.length === 0){
        return res.status(404).send({
            status : "faild",
            message : "No Bround found"
        })
    }else if(result.status === "success"){
        return res.status(200).send(result);
    }else{
        return res.status(500).send({
            success : "Faild",
            message : "Something went wrong"
        })
    }
};
// Get all Category list Controller
exports.ProductCategoryList = async (req , res) => {
    const result = await CategoryListServices();

    if(result.status ==="success" && result.data.length === 0){
        return res.status(404).send({
            status : "faild",
            message : "No Category Found"
        })
    }else if(result.status === "success"){
        return res.status(200).send(result);
    }else{
        return res.status(500).send({
            success : "Faild",
            message : "Something went wrong"
        })
    }
};

// Get Slider Controller
exports.ProductSliderList = async (req , res) => {
    const result = await SliderListServices();
    if(result.status ==="success" && result.data.length === 0){
        return res.status(404).send({
            status : "faild",
            message : "No Slider Found"
        })
    }else if(result.status === "success"){
        return res.status(200).send(result);
    }else{
        return res.status(500).send({
            success : "faild",
            message : "Something went wrong"
        })
    }
}

// // Get All Product Specific Brand
exports.ProductListByBrand = async (req , res) => {
    try {
        const data = await ListByBrandServices(req.params.brandID);

        if(data.status === 'success' && data.data.length === 0){
            return res.status(204).send({
                status  : "success",
                message :"No product Found"
            })
        }else if(data.status === "success"){
            return res.status(200).send({
                status : "success",
                data : data.data
            })
        }else{
            return res.status(404).send({
                status : "faild",
            })
        }
    } catch (error) {
        return res.status(500).send({
            status : "faild",
            data : error.message || "Somthing went wrong"
        })
    }
};




// Get All Product Specific Category
exports.ProductListByCategory = async (req , res) => {
    
}

// Product by similer
exports.ProductListBySmilier = async (req , res) => {
    
}


// Product search 
exports.ProductListByKeyword = async (req , res) => {
    
}


// Product List by remark Examole Trending top Special Etc ...
exports.ProductListByRemark = async (req , res) => {
    
};


// Product List By filter
exports.ProductListByFilter = async (req , res) => {
    
}


// Single Product Review List
exports.ProductRewiewList = async (req , res ) => {
    
}



// Product Details
exports.ProductDetails = async (req , res) => {
    
}



// Product Review Create 
exports.CreateProductReview = async (req , res) => {
    
};

