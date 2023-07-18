const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema({
    displayName: {
        type: String

    },
    password: {
        type: String

    },
    email: {
        type: String
    },
    number: {
        type: String
    },
    role: {
        type: String
    },
    cart:{
        type: [Object]
    },
   vendorproduct:{
        type: [Object]
    } ,  
    img:
    {
        data: Buffer,
        contentType: String
    },
    time : { type : Date, default: Date.now }
})
const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel