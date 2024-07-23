const express=require("express");
const router=express.Router();
const {getAllRegister}=require("../Controllers/Auth");



router.post("/register",getAllRegister)

module.exports=router;