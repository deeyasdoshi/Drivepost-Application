const DrivePost = require('../models/DrivePost');
const path = require('path');

module.exports = async(req,res)=>{
    console.log(req.body)
    try{
        const { make, model, year, plateno} = req.body
        const updateconst ={ make: make, model:model, year: year, plateno:plateno}
        const driveposts4 = await DrivePost.findByIdAndUpdate(req.session.userId,updateconst,{ new: true })
        console.log(driveposts4)          
        res.render('update',{driveposts4:[driveposts4]})
    }
    catch(error){
        console.log(error)
    }
}