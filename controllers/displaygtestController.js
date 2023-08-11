const path = require('path');
const DrivePost = require('../models/DrivePost');

module.exports = async (req,res)=>{
    try{
        console.log(req.body.license,"test")
        const driveposts = await DrivePost.findById(req.session.userId)
        console.log(driveposts,"data")
        if(driveposts.license == "default"){
            res.render('g2test');
        }
        else{
            res.render('gtest',{
                msg: 'User Not Found !'
            })
        }
    }
    catch(error){
        console.log(error)
    }
}