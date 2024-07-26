const User=require("../../Models/User");
const CustomError=require("../../Helpers/Error/CustomError");
const asyncErrorWrapper=require("express-async-handler");
const checkUserExit=asyncErrorWrapper(async(req,res,next)=>{
    const {id}=req.params;
    const user=await User.findById(id);
    if(!user){
        return next(new CustomError("Bu kimliğe sahip kullanıcı yok",400));
    }
    next();
});
module.exports={
    checkUserExit
}