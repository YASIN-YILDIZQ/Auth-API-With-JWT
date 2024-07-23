const getAllRegister=(req,res,next)=>{

    res.send({
        success:true,
        message:"Register Page"
    });

}
module.exports={
    getAllRegister
}