const G2Data = require('../models/g2TestDataStore')
module.exports = async(req,res)=>{
    try {
        G2Data.create(req.body)
        res.redirect('/')
    } 
    catch (error) {
        console.log(error)
    }
}