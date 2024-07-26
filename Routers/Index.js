const  express=require("express");
const routers=express.Router();
const auth=require("./Auth");
const questions=require("./Questions");
const user=require("./User");


routers.use("/auth",auth);
routers.use("/questions",questions);
routers.use("/users",user);


module.exports=routers;