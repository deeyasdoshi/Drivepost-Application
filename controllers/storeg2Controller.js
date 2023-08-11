const DrivePost = require('../models/DrivePost');

module.exports = async (req,res)=>{   
    console.log(req.body)
    console.log("session details in g2" , req.session);
    //send data to database
    try{
        const userId = req.session.userId;    
        const {firstname,lastname,license,age,make,model,year,platenumber} = req.body;
            const update_const = {firstname:firstname , lastname:lastname , license:license , age:age , make:make , model:model , year:year , platenumber:platenumber,appointmentid:userId};
            const driveposts4 = await DrivePost.findByIdAndUpdate(req.session.userId , update_const , { new:true })
            res.render('index' , {driveposts4:[driveposts4]})
            }
    catch(error){
        console.log(error)
    }

}