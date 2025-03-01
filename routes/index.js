const express=require("express")
const  router=express.Router()
router.get("/",(req,res)=>{
    console.log("started")
    const error = req.query.error || "";
    res.render('index', { error });
})
module.exports = router;
