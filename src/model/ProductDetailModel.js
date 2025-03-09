const mongoose = require("mongoose");

const productDetailsSchema = mongoose.Schema({
    img1 : { type : String, required : true},
    img2 : { type : String, required : true},
    img3 : { type : String, required : true},
    img4 : { type : String, required : true},
    img5 : { type : String},
    img6 : { type : String},
    img5 : { type : String},
    img6 : { type : String},
    description : {type : String , required : true},
    color : {type : String , required : true},
    size : {type : String , required : true},
    product_id : {type : mongoose.Schema.Types.ObjectId , required : true , ref : "product"}
} , {
    Timestamp : true,
    versionKey : false
});

const productDetailsModel = mongoose.model("productDetail" , productDetailsSchema);

module.exports = {productDetailsModel};