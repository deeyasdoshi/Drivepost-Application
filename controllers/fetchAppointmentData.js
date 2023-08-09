const Appointments = require('../models/appointment')

module.exports = async (req, res) => {
    try {
        
        // Query the database to get the data
        const data = await Appointments.find();
//        console.log(data)
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching data from MongoDB" });
    }
}