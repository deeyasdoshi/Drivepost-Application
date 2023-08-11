const Appointments = require('../models/Appointment')
const DrivePost = require('../models/DrivePost');

module.exports = async(req,res)=>{
    //to find id of booked appointment
    const userid = req.session.userId;
    const date = req.body.selectedDate;
    const time = req.body.selectedTime;
    const appointmentdoc = await Appointments.findOne({selectedDate:date,selectedTime:time});
    const appointmentid = appointmentdoc._id;

    console.log(appointmentid,"appointmentid")
    try {
        const selectedDateCollection = await Appointments.findOneAndUpdate({selectedDate:req.body.selectedDate, selectedTime:req.body.selectedTime},{isTimeSlotAvailable:false});
        const driveposts4 = await DrivePost.findByIdAndUpdate(userid,{appointmentid:appointmentid,testtype: 'G2'},{ new: true });

        res.redirect('/',selectedDateCollection,driveposts4);
    } 
    catch (error) {
    }
}