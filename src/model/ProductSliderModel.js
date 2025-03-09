const mongoose = require("mongoose");

const productSliderSchema = mongoose.Schema({
    title : { type : String, required : true},
    short_des : { type : String, required : true},
    price : { type : String, required : true},
    image : { type : String, required : true},
    product_id : {type : mongoose.Schema.Types.ObjectId , required : true, ref : "product"}
} , {
    Timestamp : true,
    versionKey : false
});

const productSliderModel = mongoose.model("productSlider" , productSliderSchema);

module.exports = productSliderModel