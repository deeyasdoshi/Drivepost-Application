const G2Data = require('../models/g2TestDataStore')

module.exports = async(req,res)=>{
    try{
        const { license, make, model, year, plateno} = req.body
        const updateconst ={carDetails:{ make: make, model:model, year: year, plateno:plateno}}
        const licenseNo = {license:license}
        const g2collection2 = await G2Data.findOneAndUpdate(licenseNo,updateconst,{ new: true })
        res.render('updated_details',{g2collection2:[g2collection2]})
    }
    catch(error){
        console.log(error)
    }
}