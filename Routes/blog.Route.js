const express = require("express");
const Article = require("../Model/blog.schema");
const User = require("../Model/user.schema");
const BlogRouter = express.Router();

// Create a blog post and associate it with a user
BlogRouter.post("/createBlog", async (req, res) => {
    try {
        const article = await Article.create(req.body);

        // Update the user's blog array with the article's ID
        const updatedUser = await User.findByIdAndUpdate(
            article.user, // Assumes user ID is in `article.user`
            { $push: { blog: article._id } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found to associate with the blog.",
            });
        }

        res.status(200).json({
            message: "Article created successfully and associated with user!",
            data: article,
        });
    } catch (err) {
        console.error("Error creating blog:", err.message);
        res.status(500).json({
            message: "Something went wrong!",
            error: err.message,
        });
    }
});

module.exports = BlogRouter;
