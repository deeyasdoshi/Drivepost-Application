const Appointments = require('../models/appointment')

module.exports = async (req,res)=>{
    try{
        // const {date, selectedTime} =req.body
        console.log(req.body)
        const bookedSlot = Appointments.create({
            selectedDate:req.body.selectedDate,
            selectedTime:req.body.selectedTime,
            isTimeSlotAvailable:true
        })
        res.render('appointmentBooked',bookedSlot)
    }    
    catch(error){
    }
}