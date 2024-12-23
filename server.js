const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const dbConfig = require("./Configuration/dbconfig");
const UserRouter = require("./Routes/user.Route");
const BlogRouter = require("./Routes/blog.Route");

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/blog", BlogRouter); 

// Start server
app.listen(process.env.PORT, () => {
    dbConfig(); // Initialize database connection
    console.log(`Server is listening on port ${process.env.PORT}`);
});
