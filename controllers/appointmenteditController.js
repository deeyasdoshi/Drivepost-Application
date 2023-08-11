const Appointments = require('../models/Appointment');
const DrivePost = require('../models/DrivePost');

module.exports = async (req,res)=>{
    try{
        const userId = req.session.userId;
        console.log(userId,"userid");
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