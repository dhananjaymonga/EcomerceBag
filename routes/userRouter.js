const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model"); // ✅ Correct
console.log("User Model:", userModel);
const {registerUser,loginUser}=require("../controllers/authcontrollers")
const { generateToken } = require("../utils/generatetoken");
const isLoggenin = require("../middlewares/isLoggenin");
// const {registerUser,loginUser,logout,}=require("../controllers/authcontrollers")
console.log(userModel)
router.get("/", (req, res) => {
    res.send("hey its working!");
});
router.post("/register",registerUser)
router.post("/login",loginUser)
// router.get("/logout",logout)

module.exports = router;
