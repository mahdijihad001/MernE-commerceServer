const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema({
   user_id : {type : mongoose.Schema.Types.ObjectId , required : true , ref : "user"},
   total : {type : String , required : true},
   vat : {type : String , required : true},
   payable : {type : String , required : true},
   cus_details : {type : String , required : true},
   ship_details : {type : String , required : true},
   tran_id : {type : String , required : true},
   delivery_status : {type : String , required : true},
   payment_status : {type : String , required : true},
} , {
    Timestamp : true,
    versionKey : false
});


const wishModel = mongoose.model("invoice" , InvoiceSchema);

module.exports = wishModel
