const mongoose = require("mongoose")
const Schema = mongoose.Schema
const CustomerProductSchema = new Schema({
    price: {
        type: Number

    },
    category: {
        type: String

    },
    description: {
        type: String
    },
   discountedPrice: {
        type: Number
    },
   orders: {
        type: Number
    } ,
    vendor:{
        type:String
    } ,
    title:{
        type:String,
     
    },
    approved:{
        type:Boolean
    }          
})
const CustomerProductModel = mongoose.model("customerproduct", CustomerProductSchema)
module.exports = CustomerProductModel