const Appointments = require('../models/appointment')
const G2Data = require('../models/g2TestDataStore')

module.exports = async(req,res)=>{
    try {
        const userId = req.session.userId
        const g2collection2 = await G2Data.findById(userId)
        const bookedSlots = await Appointments.find()
        if(g2collection2.firstname!="default"){
            res.render('g2_test',{g2collection2})
        }
        else{
            res.render('g2_test',{g2collection2})
        }
    } catch (error) {
        console.log(error)
    }
}