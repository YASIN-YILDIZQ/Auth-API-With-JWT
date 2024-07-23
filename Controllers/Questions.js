const getAllQuestions=(req,res,next)=>{
res.send({
    success:true,
    message:" Questions Page"
});
}
module.exports={
    getAllQuestions
}