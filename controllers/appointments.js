const Appointments = require('../models/appointment')

module.exports = async(req,res)=>{
    const selectedDate = req.body.date
    const timeSlots = [
        "09:00 AM - 09:30 AM",
        "09:30 AM - 10:00 AM",
        "10:00 AM - 10:30 AM",
        "10:30 AM - 11:00 AM",
        "11:00 AM - 11:30 AM",
        "11:30 AM - 12:00 PM",
        "12:00 PM - 12:30 PM",
        "12:30 PM - 01:00 PM",
        "01:00 PM - 01:30 PM",
        "01:30 PM - 02:00 PM",
        "02:00 PM - 02:30 PM",
        "02:30 PM - 03:00 PM",
        "03:00 PM - 03:30 PM",
        "03:30 PM - 04:00 PM",
        "04:00 PM - 04:30 PM",
        "04:30 PM - 05:00 PM"        
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
