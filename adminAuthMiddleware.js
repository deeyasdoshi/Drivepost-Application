module.exports = (req,res,next)=>{
    try {
        const userId = req.session.userId
        const userType = req.session.userType
        if(!userId || userType!="admin"){
            return res.redirect('/')
        }
        next()
    } catch (error) {
        console.log(error)
    }
}
