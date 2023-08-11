module.exports = (req,res,next) => {
    try{
        console.log(req.session.userId);
        const userId = req.session.userId;
        const usertype = req.session.usertype;
        if(!userId || usertype!="examiner"){
            return res.redirect('/')
        }
        next();
    }
    catch(error){
        console.log(error);
    }
}
