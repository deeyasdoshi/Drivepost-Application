const G2Data = require('../models/g2TestDataStore')

module.exports = async(req,res)=>{
    try{
        const userId = req.session.userId
        const g2collection2 = await G2Data.findById(userId)
        if(g2collection2.firstname!="default"){
            res.render('g_test',{g2collection2:[g2collection2]})
        }
        else{   
            res.render('g2_test')
        } 
    } catch (error) {
        
    }
}