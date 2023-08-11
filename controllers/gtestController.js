
const G2Data = require('../models/DrivePost')

module.exports = async(req,res)=>{
    try{
        const userId = req.session.userId
        console.log(userId,'gtest userId')
        const g2collection2 = await G2Data.findById(userId)
        console.log(g2collection2,'gtest')
        if(g2collection2.firstname!="default"){
            res.render('gtest',{g2collection2:[g2collection2]})
        }
        else{   
            res.render('g2test')
        }
    } catch (error) {
        console.log(error)
    }
}