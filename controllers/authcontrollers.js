const userModel=require("../models/user-model")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const { generateToken } = require("../utils/generatetoken");
module.exports.registerUser= async function(req,res){
    try {
        let { fullname, email, password } = req.body;
        console.log("Request Body:", req.body);
        // let existingUser = await userModel.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ error: "Email already in use!" });
        // }
        let user= await userModel.findOne({email:email})
        if(user) return res.status(401).send("you have already have an account")

        // ✅ Password Hashing
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
console.log(hashedPassword)
        // ✅ Create new user
        let users = await userModel.create({
            fullname,
            email,
            password: hashedPassword,  // Save Hashed Password
        });
  let token =generateToken(users)
//    let token=     jwt.sign({email,id:user._id},"heyheyheye")
   res.cookie("token",token)
   res.send("user created sucesfully")

        // ✅ Send Response
        // res.status(201).json({
        //     message: "User registered successfully!",
        //     user: { id: user._id, fullname: user.fullname, email: user.email }
        // });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}