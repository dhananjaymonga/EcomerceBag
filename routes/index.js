const express=require("express");
const isLoggenin = require("../middlewares/isLoggenin");
const  router=express.Router()
router.get("/",(req,res)=>{
    let error=req.flash("error")
    console.log("started")
    // const error = req.query.error || "";
    res.render('index', { error });
})
router.get("/shop",isLoggenin,function(req,res){
    res.render("shop")
})
module.exports = router;
