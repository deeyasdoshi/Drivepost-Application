const G2Data = require('../models/g2TestDataStore')

module.exports = async(req,res)=>{
    try {
        const g2collection2 = await G2Data.find({license:req.params.license})
        res.render('edit_details',{
            g2collection2
        })
    } catch (error) {
        
    }
}