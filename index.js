const express=require("express");
const userRouter=require("./Routes/user");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const port=process.env.PORT;
const url=process.env.URL;
const {connectMongoDb}=require("./connection");
const logReqRes=require("./Middlewear/index");


//Database connection
connectMongoDb(url).then(()=>console.log("MongoDb connected"));

//middlewear
app.use(express.urlencoded({extended:false}))
app.use(logReqRes("./log.txt"));

//Routes
app.use("/api/users",userRouter);


app.listen(port,()=>console.log(`App is running on port ${port}`))
 