const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
    user_id : {type : mongoose.Schema.Types.ObjectId , required : true , ref : "user"},
    cus_name : {type : String},
    cus_add : {type : String},
    cus_city : {type : String},
    cus_state : {type : String},
    cus_postcod : {type : String},
    cus_contry : {type : String},
    cus_phone : {type : String},
    cus_fax : {type : String},
    ship_name : {type : String},
    ship_add : {type : String},
    ship_city : {type : String},
    ship_state : {type : String},
    ship_postcode : {type : String},
    ship_country : {type : String},
    ship_phone : {type : String},
} , {
    Timestamp : true,
    versionKey : false
});


const userProfileModel = mongoose.model("userProfil" , userProfileSchema);

module.exports = userProfileModel
