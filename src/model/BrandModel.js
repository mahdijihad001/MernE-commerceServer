const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
    brandName : {
        type : String,
        unique : true,
        required : true
    },
    brandImg : {
        type : String,
        required : true
    }
} , {
    Timestamp : true , versionKey : false
});


const brandModel = mongoose.model("brand" , brandSchema);

module.exports = brandModel