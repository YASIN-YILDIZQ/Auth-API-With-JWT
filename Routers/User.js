const express=require("express");
const {getSingleUser,gettAllUser}=require("../Controllers/User");
const {checkUserExit}=require("../Middlewares/Database/DatabaseErrorsHelpers");
const router=express.Router();
router.get("/",gettAllUser)
router.get("/:id",checkUserExit,getSingleUser);
module.exports=router;