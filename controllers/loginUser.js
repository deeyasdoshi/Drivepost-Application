const bcrypt = require('bcrypt')
const User = require('../models/g2TestDataStore')

module.exports =  async(req,res) => {
    try{
        const {username, password} = req.body

        const user = await User.findOne({username:username})

        if(user) {
            const same = await bcrypt.compare(password,user.password)
           
            if(same){
                //user allowed to login (user sessions pending)
                req.session.userId = user._id
                req.session.userType = user.userType
                res.redirect('/')
            } else {
                res.redirect('/login')
            }
        } else {
            res.redirect('/login')

        }

    } catch(error){
        //handle error
        console.log(error)
    } 
}