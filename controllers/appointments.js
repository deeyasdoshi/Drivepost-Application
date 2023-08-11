const Appointments = require('../models/Appointment')

module.exports = async(req,res)=>{
    const selectedDate = req.body.date
    const timeSlots = [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "01:00",
        "01:30",
        "02:00"       
        // Add other time slots here
    ];
    try {
        let actualTimeSlots = []
        const bookedSlotArray = []
        let filteredArray = []
        const bookedSlots = await Appointments.find({selectedDate:selectedDate})

        function actualBookedSlots(){
            for(i=0;i<bookedSlots.length;i++){
                if(bookedSlots[i].isTimeSlotAvailable===true){
                    bookedSlotArray[i]=bookedSlots[i].selectedTime
                }
            }
            return bookedSlotArray
        } 

        if(!bookedSlots[0]){
            actualTimeSlots  = timeSlots
        }
        
        else if(bookedSlots.length>0){
            actualBookedSlots()
            actualTimeSlots = timeSlots
            filteredArray = timeSlots.filter(item => !bookedSlotArray.includes(item));
        }

        res.render('appointment',{actualTimeSlots,filteredArray,selectedDate,bookedSlotArray})    

    } catch (error) {

    }

}