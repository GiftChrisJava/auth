const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// image routes
router.post("/register", userController.addUser);
router.post("/login", userController.getUserByContact);


module.exports = router;
