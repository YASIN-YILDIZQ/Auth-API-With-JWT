const CustomError=require("../../Helpers/Error/CustomError");
const  jwt=require("jsonwebtoken");
const {isTokenIncluded,getAccessTokenFromHeader}=require("../../Helpers/Authorization/TokenHelpers");
const {JWT_SECREY_KEY}=process.env;
const getAccessToRoute=(req,res,next)=>{
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

module.exports={
    getAccessToRoute
}