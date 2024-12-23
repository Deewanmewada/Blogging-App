const { Schema, mongo } = require("mongoose");

const commentSchema = new Schema({
    comment: {
        type:String,
        rquired: true,
    },
    blog: {
        ref: "Article",
        type:Schema.Types.ObjectId,
        required: true,
    },
    user: {
        type:Schema.Types.ObjectId,
        required: true,
        ref: "User" ,
    },
},
    { timestamps:true }
);
const Comment = mongo.model("Comment",commentSchema);
module.exports = Comment;

