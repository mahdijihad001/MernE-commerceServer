const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "product" },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    color : {type : String , required : true},
    size : {type : String , required : true},
    qty : {type : String , required : true},
    price : {type : String , required : true},
}, {
    Timestamp: true,
    versionKey: false
});


const cartModel = mongoose.model("addToCart", cartSchema);

module.exports = cartModel
