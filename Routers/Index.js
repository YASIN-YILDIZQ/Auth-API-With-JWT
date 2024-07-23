const  express=require("express");
const routers=express.Router();
const auth=require("./Auth");
const questions=require("./Questions");


routers.use("/auth",auth);
routers.use("/questions",questions);

module.exports=routers;