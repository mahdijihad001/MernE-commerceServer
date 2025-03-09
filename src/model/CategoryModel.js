const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    categoryName : {
        type : String,
        uinque : true,
        required : true
    },
    categoryImg : {
        type : String,
        required : true
    }
} , {
    Timestamp : true , versionKey : false
});

const categoryModel = mongoose.model("category" , CategorySchema);

module.exports = categoryModel;