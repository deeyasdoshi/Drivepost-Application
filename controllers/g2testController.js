const DrivePost = require('../models/DrivePost');
const path = require('path');

module.exports = async (req,res)=>{
    // console.log("session details in G2 page here !!!" , req.session);
    const drivepost = await DrivePost.findById(req.session.userId);
    console.log(" driver details" , drivepost);
    res.render('g2test', {drivepost:[drivepost]});
}