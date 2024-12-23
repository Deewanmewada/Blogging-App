const express = require("express");
const User = require("../Model/user.schema");
const UserRouter = express.Router();

// Create a new user
UserRouter.post("/create", async (req, res) => {
    try {
        const response = await User.create(req.body);
        res.status(200).json({
            message: "User created successfully!",
            data: response,
        });
    } catch (err) {
        console.error("Error creating user:", err.message);
        res.status(500).json({
            message: "Something went wrong!",
            error: err.message,
        });
    }
});

// Get all users
UserRouter.get("/getUser", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            message: "Users fetched successfully!",
            data: users,
        });
    } catch (err) {
        console.error("Error fetching users:", err.message);
        res.status(500).json({
            message: "Something went wrong!",
            error: err.message,
        });
    }
});

module.exports = UserRouter;
