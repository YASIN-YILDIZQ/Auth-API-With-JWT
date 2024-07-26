 const User=require("../Models/User");
 const CustomError=require("../Helpers/Error/CustomError");
 const asyncErrorWrapper=require("express-async-handler");

 const getSingleUser=asyncErrorWrapper(async(req,res,next)=>{
    const {id}=req.params;
    const user=await User.findById(id);
 
    return res.status(200)
    .json({
        success:true,
        data:user
    });
 });
 const gettAllUser=asyncErrorWrapper(async(req,res,next)=>{
const users=await User.find();
return res.status(200).json({
    success:true,
    data:users
}); 
});
 module.exports={
    getSingleUser,
    gettAllUser
 }