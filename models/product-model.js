const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discount:{type:Number,default:0},
    bgcolor:String,
    pannelcolor:String,
    textcolor:String,
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
})
const Product=mongoose.model("Product",productSchema)




