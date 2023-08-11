const DrivePost = require('../models/DrivePost');
const path = require('path');

module.exports = async (req,res) => {
    console.log(req.body);
    try{
        const {make,model,year} = req.body;
        const update_const = {make:make , model:model , year:year};
        const driveposts4 = await DrivePost.findOneAndUpdate({license:req.body.license} , update_const , { new:true })
        res.render('update' , {driveposts4:[driveposts4]})
    }
    catch{error}{
        console.log(error);
    }
}