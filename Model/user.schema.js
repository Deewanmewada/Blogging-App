const { Schema, default: mongoose, model } = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "kindly Input the firstName"],

    },
    lastName: {
        type: String,
        required: [true , "Kindly Input the lastName"],

    },
    email: {
        type: String,
        required: [true, "Kindly Input the email"],

    },
    password: {
        type: String,
        required: true,
        select: false,
        
    },
    username: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum:["SUPER ADMIN" , "ADMIN", "USER"],
        default: "USER",
    },
    blog:[
        {
        type: Schema.Types.ObjectId,
        ref: "Article" ,
        },
    ],
},{timestamps:true}); 

const User = mongoose.model("User" , userSchema);
module.exports = User ;