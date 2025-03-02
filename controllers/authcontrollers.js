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
// console.log(hashedPassword)
        // ✅ Create new user
        let users = await userModel.create({
            fullname,
            email,
            password: hashedPassword,  // Save Hashed Password
        });
  let token =generateToken(users)
   res.cookie("token",token)
res.redirect("/shop")
console.log("send")
   
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports.loginUser= async function(req,res){
    let {email,password}=req.body
let user =await userModel.findOne({email:email})
console.log(user.password,"hi")
if(!user) return res.send("email or password wrong")

        bcrypt.compare(password,user.password,function(err,result){
    console.log(result)})
    if(result){
        let token=generateToken(user)
        res.cookie("token",token)
        res.send("you can login")
        
    }
    else{
      return res.send("Email or Password Incorrect")
        // return res.redirect("/")
    }
   

}

// // 
