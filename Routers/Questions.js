const express=require("express");
const router=express.Router();
const {getAllQuestions}=require("../Controllers/Questions");


router.get("/",getAllQuestions);



module.exports=router;