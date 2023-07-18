const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ProductSchema = new Schema({
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
const ProductModel = mongoose.model("product", ProductSchema)
module.exports = ProductModel