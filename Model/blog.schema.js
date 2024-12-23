const { Schema, default: mongoose } = require("mongoose");

const articleSchma = new Schema({
    title: {
        type:String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User" ,
        required: true,
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
    }
},{timestamps:true});

const Article = mongoose.model("Aritcle", articleSchma);
module.exports = Article;  