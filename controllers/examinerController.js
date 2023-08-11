const Appointments = require('../models/Appointment');
const DrivePost = require('../models/DrivePost');

module.exports = async (req,res) => {

    const readydrivers = await Appointments.find({isTimeSlotAvailable:'false'});
    console.log(readydrivers , "reaydrivers");

    res.render('examiner',{readydrivers});
}