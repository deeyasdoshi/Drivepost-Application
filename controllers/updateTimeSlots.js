const Appointments = require('../models/appointment')

module.exports = async(req,res)=>{
    // console.log(req.body.selectedTime)
    try {
        const selectedDateCollection = await Appointments.findOneAndUpdate({selectedDate:req.body.selectedDate, selectedTime:req.body.selectedTime},{isTimeSlotAvailable:false})
        res.redirect('/')
    } catch (error) {
    }
}