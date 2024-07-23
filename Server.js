const dotenv = require('dotenv').config({path:"./config/config.env"});
const express=require("express");
const app= express();
const routers=require("./Routers/Index");
const DatabaseConnect=require("./Helpers/Database/Database");


const Port=process.env.PORT
//Connect Database
DatabaseConnect();
app.use("/api",routers);

app.listen(Port,()=>{
    console.log(`${Port},listening..`)
});