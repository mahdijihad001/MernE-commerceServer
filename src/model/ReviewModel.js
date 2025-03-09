const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "product" },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    description : {type : String , required : true},
    rating : {type : String , required : true},
}, {
    Timestamp: true,
    versionKey: false
});


const reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel
