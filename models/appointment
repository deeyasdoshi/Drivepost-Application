const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KioskAppointmentSchema = new Schema({
    selectedDate:{type:String},
    selectedTime:{type:String} ,
    isTimeSlotAvailable: Boolean},
    {unique: { unique: true, partialFilterExpression: { selectedTime: { $exists: true } }, unique:false }
}
)

const Appointments = mongoose.model('Appointment',KioskAppointmentSchema); //connection of collection
module.exports = Appointments;
