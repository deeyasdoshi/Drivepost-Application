const G2Data = require('../models/g2TestDataStore')

module.exports = async(req,res)=>{
    try{
        const {license} = req.body
        const g2collection2 = await G2Data.find({license:license})
        if(g2collection2.length>0){
            res.render('fetched_data',{
                g2collection2
            })
    }
    else{   
        res.render('g_test',{
            msg:'user not found try again or'
        })
    } 
    } catch (error) {
        
    }
}