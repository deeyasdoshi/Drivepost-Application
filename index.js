const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressSession = require('express-session')
const bodyParser = require('body-parser')

//In-built Middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(expressSession({
    secret:'I love fullstack'
}))

//Custom Middlewares
const adminAuthMiddleware = require('./middlewares/adminAuthMiddleware')
const authMiddleware = require('./middlewares/authMiddleware')
const redirectIfAuthenticated = require('./middlewares/redirectIfAuthenticated')

//for navbar control
global.loggedIn=null
app.use('*',(req,res,next)=>{
        loggedIn = req.session.userId
        next()
})

global.userType = null
app.use('*',(req,res,next)=>{
    userType = req.session.userType
    next()
})

//Controllers
const homeController = require('./controllers/homeController')
const loginController = require('./controllers/loginController')
const g2_test_controller = require('./controllers/g2_test_controller')
const g_test_controller = require('./controllers/g_test_controller')
const signUp_controller = require('./controllers/signUp_controller')
const g2_data_store_controller = require('./controllers/g2_data_store_controller')
const display_details_controller = require('./controllers/display_details_controller')
const edit_details_controller = require('./controllers/edit_details_controller')
const update_car_details_controller = require('./controllers/update_car_details_controller')
const store_user_controller = require("./controllers/store_user_controller")
const loginUserontroller = require("./controllers/loginUser")
const logoutController = require('./controllers/logoutController')
const appointment = require('./controllers/appointments')
const sendAppointmentData = require('./controllers/sendAppointmentData.js')
const matchDate = require('./controllers/matchDate.js') 
const fetchAppointmentData = require('./controllers/fetchAppointmentData.js')
const updateTimeSlots = require('./controllers/updateTimeSlots.js')

app.listen(5000,()=>{
    console.log('Hi I am listening at 5000')
})

//Route 1 : dashboard
app.get('/',homeController)

//Route 2 : login
app.get('/login',loginController)

//Route 3 : g2_test
app.get('/g2_test',authMiddleware,g2_test_controller)

//Route 4 : g_test
app.get('/g_test',authMiddleware,g_test_controller)

//Route 5: signUp
app.get('/signUp',signUp_controller)

mongoose.connect('mongodb+srv://admin:admin@cluster0.g4lqotk.mongodb.net/G2Data?retryWrites=true&w=majority')

//Route 6: stores data entered on G2 page
app.post("/g2_test/store",g2_data_store_controller)

//Route 7: displays the data on G2 page from G2 edit button apears
app.post('/g_test/display_details',display_details_controller)

//Route 8: editable page opens and allows to edit car details
app.post('/edit_details/:license',edit_details_controller)

//Route 9: responsible for updating the car details in databse
app.post('/edit_details_update/:license',update_car_details_controller)

//Route 10: stores the user details from sign up page 
app.post('/user/signUp',redirectIfAuthenticated,store_user_controller)

//Route 11: takes data from user and valdates it
app.post('/user/login',redirectIfAuthenticated,loginUserontroller)

//Route 12: logout controller
app.get('/auth/logout',logoutController)

//Route 13: select a date
app.get('/appointment/selectedDate',adminAuthMiddleware,matchDate)

//Route 14: appointments
app.post('/appointment/fetched_slots',adminAuthMiddleware,appointment)

//Route 15: send data to database
app.post('/appointmentBooked',sendAppointmentData)

//Route 16: fetch data from appointments 
app.get("/g2_test/data", fetchAppointmentData);

//Route 17: update data in appointment collection
app.post("/g2_test/appointmentBooked", updateTimeSlots)
