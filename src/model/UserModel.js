const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email : {type : String , unique : true , required : true , trim : true , lowercase : true},
    otp : {type : String , required : true}
} , {
    Timestamp : true,
    versionKey : false
});


const userModel = mongoose.model("user" , userSchema);

module.exports = userModel
