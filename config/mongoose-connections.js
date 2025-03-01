const mongoose=require("mongoose")
const dbgr=require("debug")("development:mongoose")
const config=require("config")

mongoose.connect(`${config.get("MONGO_URI")}/user`).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})
module.exports=mongoose.connection;


