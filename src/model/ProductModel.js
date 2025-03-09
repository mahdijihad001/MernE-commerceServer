const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title : {type : String , required : true},
    short_des : {type : String},
    price : {type : Number , required : true},
    discount : {type : Boolean},
    discount_price : {type : Number},
    image : {type : String , required : true},
    stock : {type : Boolean},
    star : {type : String},
    remark : {type : String},
    category_id : {type :mongoose.Schema.Types.ObjectId , required : true , ref : "category"},
    brand_id : {type :mongoose.Schema.Types.ObjectId , required : true , ref : "brand"},
} , {
    Timestamp : true,
    versionKey : false
});


const productModel = mongoose.model("product" , productSchema);

module.exports = {productModel};

