export default(req,res,next)=>{
    console.log('midleware here');
    next()
}