const express=require("express")
const app =express()
const db=require("./config/mongoose-connections")
const ownerRouter=require("./routes/ownerRouter")   
const userRouter=require("./routes/userRouter")
const indexRouter =require("./routes/index")
const productRouter=require("./routes/productRouter")

const expressSession=require("express-session")
const flash =require("connect-flash")

require("dotenv").config()
const cookie=require("cookie-parser")
const path=require("path")
const cookieParser = require("cookie-parser")
const router = require("./routes")
app.use(express.json()); // ✅ Correct
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "your_secret_key_here",
    cookie: { secure: false } // ✅ HTTP only (set true for HTTPS)
}));

app.use(flash())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine", "ejs");
app.use("/owners",ownerRouter)
app.use("/",indexRouter)
//  route for shop
app.use("/users",userRouter)
app.use("/products",productRouter)
app.listen(4000,()=>{
    console.log("start")
})