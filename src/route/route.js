const express = require('express');
const router = express.Router();
const blogController = require("../controller/blogController")

router.get("/blogs", blogController.getBlogs)

module.exports = router;
