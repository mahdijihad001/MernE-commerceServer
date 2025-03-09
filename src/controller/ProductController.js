const { model } = require("mongoose");

// Get Brand Controller
exports.ProductBrandList = async(req , res) =>{
    return res.status(200).send({
        message : "Get All Brand List"
    })
};
// Get Category Controller
exports.ProductCategoryList = async (req , res) => {
    
};

// Get Slider Controller
exports.ProductSliderList = async (req , res) => {
    
}

// Get All Product Specific Brand
exports.ProductListByBrand = async (req , res) => {
    
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

