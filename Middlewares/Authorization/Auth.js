const CustomError=require("../../Helpers/Error/CustomError");
const  jwt=require("jsonwebtoken");
const asyncErrorWrapper=require("express-async-handler");
const User=require("../../Models/User");
const {isTokenIncluded,getAccessTokenFromHeader}=require("../../Helpers/Authorization/TokenHelpers");

const getAccessToRoute=(req,res,next)=>{
    const {JWT_SECREY_KEY}=process.env;
    //Token
    if(!isTokenIncluded(req)){
        //401-Unauthorized
        //403 Forbidden
        return next(new CustomError("Bu rotaya erişim yetkiniz yok",401));
    }
    const accessToken=getAccessTokenFromHeader(req);
    jwt.verify(accessToken,JWT_SECREY_KEY,(err,decoded)=>{
        if(err){
            return next(new CustomError("Bu rotaya erişim yetkiniz yok",401) );

        }
      req.user={
        id:decoded.id,
        name:decoded.name
      }
        next();
    })
 
}

const getAdminAccess=asyncErrorWrapper(async (req,res,next)=>{
   const {id}=req.user;
   const user=await User.findById(id);
   if(user.role!=="admin"){
    return next(new CustomError("Admin değilsiniz,erişim hakkınız yok",403));
   }
   next();
});
module.exports={
    getAccessToRoute,getAdminAccess
}