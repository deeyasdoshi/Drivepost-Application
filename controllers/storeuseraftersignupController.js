const DrivePost = require('../models/DrivePost');
const path = require('path');


module.exports = async (req,res)=>{   
    
try{
    console.log(req.body);
    const {username , password , usertype } = req.body;
    // console.log(password[1] ,"username");
    // console.log(req.session.userId,"userid");
    const drivepost = await DrivePost.create({
        firstname: 'default', 
        lastname: 'default', 
        license: 'default', 
        age: '0', 
        username: username, 
        password: password[1], //Encrypted value 
        usertype: usertype, 
        make: ' default ', 
        model: ' default ', 
        year: '0', 
        platenumber: ' default ' 
    })
    res.redirect('/login');
}
catch(error){
    console.log(error);
    res.redirect('/auth/signup')
}

}