const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    invoice_id : {type : mongoose.Schema.Types.ObjectId , required : true , ref : "invoice"},
    product_id : {type : mongoose.Schema.Types.ObjectId , required : true , ref : "product"},
    qty : {type : String , required : true},
    sale_price : {type : String , required : true}
} , {
    Timestamp : true,
    versionKey : false
});

const invoiceProductModel = mongoose.Schema("invoiceProduct" , DataSchema);

module.exports = invoiceProductModel