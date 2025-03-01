const express = require("express");
const router = express.Router();
const ownerwnerModel=require("../models/owner-model")
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV==="development"){
router.get("/create", async function (req, res) {
    let owners=await ownerModel.find()
    if(owners.length>0){
  return  res.status(503).json({message:"Owner already exists"}) 
}

let createdowner =await ownerModel.create({
    fullname,
    email,
    password
})

    res.status(201).send(createdowner)



});
}
router.get("/", (req, res) => {
    res.send("Owner Route Works!");
});

module.exports = router; // ✅ Ensure you are exporting the router
