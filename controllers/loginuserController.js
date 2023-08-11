const DrivePost = require('../models/DrivePost');
const path = require('path');
const bcrypt = require('bcrypt');

module.exports = async (req,res)=>{   
    
try{
    //fetch username ,password from user form
    const {username , password} = req.body
    //findOne() : finds 1st occurance 
    const user = await DrivePost.findOne({username:username})

    if(user){
        //1st para : password from req.body - user login form
        //2nd para : password in database
        const same = await bcrypt.compare(password,user.password)

        if(same){ 
            //user allowed to login 
            //sessions
            req.session.userId = user._id; 
            req.session.usertype = user.usertype;
            console.log(req.session , "session details");
            res.redirect('/'); 
        }
        else{
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/login')
    }
}
catch(error){
    //handles errors
    console.log(error)
}

}