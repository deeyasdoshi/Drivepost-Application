const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


//() - we are creating schema , {}- json
const DrivePostSchema = new Schema({
    firstname: String,
    lastname: String,
    license : String,
    age: Number,
    make : String,
    model: String,
    year: String,
    platenumber : String,
    username : String,
    password : String,
    usertype : String,
    appointmentid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
        },
    testtype : String    
}) //structure of database

DrivePostSchema.pre('save' , function(next){
    const drive = this
    bcrypt.hash(drive.password , 10 , (error,hash) => {
        drive.password = hash;
        next();
    })
})

const DrivePost = mongoose.model('DrivePost' , DrivePostSchema);
//1st parameter - name of collection
//2nd parameter - name of schema

// exporting the collection
module.exports = DrivePost;