const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create a Schema
const KioskSchema = new Schema({
    firstname:{
        type:String,
        default:"default"
    },
    lastname:{
        type:String,
        default:"default"
    },
    age : {
        type:Number,
        default:0
    },
    license :{
        type:String,
        default:"default"
    },
    username:{
        type:String,
        default:"default"
    },
    password:{
        type:String,
        default:"default"
    },
    userType:{
        type:String,
        default:"default"
    },
    carDetails:{
        make:{
            type:String,
            default:"default"
        },
        model: {
            type:String,
            default:"default"
        },
        year: {
            type:Number,
            default:0
        },
        plateno: {
            type:String,
            default:"default"
        }
    }
}) 

KioskSchema.pre('save', function(next){
    const user = this 
    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password = hash 
        next()
    })
})


KioskSchema.pre('save', function(next){
    const user = this 
    bcrypt.hash(user.license,10,(error,hash)=>{
        user.license = hash 
        next()
    })
})

                // name of collection, name of created schema 
const G2Data = mongoose.model('G2Data',KioskSchema); //connection of collection
module.exports = G2Data;