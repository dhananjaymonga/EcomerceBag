const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model"); // ✅ Correct
console.log("User Model:", userModel);
const jwt=require("jsonwebtoken")
const {registerUser}=require("../controllers/authcontrollers")
const { generateToken } = require("../utils/generatetoken");

console.log(userModel)
router.get("/", (req, res) => {
    res.send("User Route Works!");
});
router.post("/register",registerUser)

module.exports = router;
