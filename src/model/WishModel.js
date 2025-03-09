const mongoose = require("mongoose");

const wishSchema = mongoose.Schema({
   product_id : {type : mongoose.Schema.Types.ObjectId , required : true , ref : "product"},
   user_id : {type : mongoose.Schema.Types.ObjectId , required : true , ref : "user"},

} , {
    Timestamp : true,
    versionKey : false
});


const wishModel = mongoose.model("wish" , wishSchema);

module.exports = wishModel
