const G2Data = require('../models/g2TestDataStore')

module.exports =  async(req,res)=>{
    //send data to database
    try{
        const userId = req.session.userId
        const {firstname,lastname,age,license,make,model,year,plateno} =req.body
        const updateconst ={firstname:firstname,lastname:lastname,age:age,license:license, carDetails:{make: make, model:model, year: year,plateno:plateno}} 
        const g2collection2 = await G2Data.findByIdAndUpdate(userId,updateconst,{new:true})
        res.render('updated_details',{g2collection2:[g2collection2]})
    }    
    catch(error){
    }
}