const express = require('express');
const app = express(); // creates express app application
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ejs = require('ejs');
const expressSession = require('express-session');
const bodyParser = require('body-parser')


//Controller files
const homeController = require('./controllers/homeController');
const loginController = require('./controllers/loginController');
const g2testController = require('./controllers/g2testController');
const getg2testController = require('./controllers/getg2controller');
const storeg2testController = require('./controllers/storeg2Controller');
const gtestController = require('./controllers/gtestController');
const displaygtestController = require('./controllers/displaygtestController');
const updateController = require('./controllers/updateController');
const storeupdateController = require('./controllers/storeupdateController');
const signupController = require('./controllers/signupController');
const storeuseraftersignupController = require('./controllers/storeuseraftersignupController');
const loginuserController = require('./controllers/loginuserController');
const logoutController = require('./controllers/logoutController');
const appointment = require('./controllers/appointments');
const sendAppointmentDataController = require('./controllers/appointmenteditController');
const matchDate = require('./controllers/matchDate.js') 
const fetchAppointmentData = require('./controllers/fetchAppointmentData.js')
const updateTimeSlotsG2 = require('./controllers/updateTimeSlotsG2.js')
const updateTimeSlotsG = require('./controllers/updateTimeSlotsG.js')
const examinerController = require('./controllers/examinerController');

//custom middlewares
const authMiddleware = require('./middleware/authMiddleware');
const redirectifauthenticatedMiddleware = require('./middleware/redirectifauthenticated');
const auth2Middleware = require('./middleware/auth2Middleware');
const auth3Middleware = require('./middleware/auth3Middleware');

//in-built middlewares
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(express.json());  //we mention the middlewares using app.use function
app.use(express.urlencoded());  //we mention the middlewares using app.use function
app.use(expressSession({
    secret : 'love express'
}))

//for navbar control
global.loggedIn = null;
// value of req.session is found we assign it to loggedIn variable
app.use("*" , (req,res,next) => {
    loggedIn = req.session.userId;
    usertype = req.session.usertype;
    next();
})



app.listen(5000, ()=>{
    console.log("App is listening on port 5000");
})

// Database connection
mongoose.connect('mongodb+srv://admin1:adminone@cluster0.njpmf30.mongodb.net/drivepost?retryWrites=true&w=majority');


//Route 1 - Home page
app.get('/', homeController );

//Route 2 - Login page
app.get('/login', redirectifauthenticatedMiddleware , loginController );

//Route 3 - after entering login details in login page
app.post('/users/login' , redirectifauthenticatedMiddleware , loginuserController );

//Route 4 - Signup Page
app.get('/auth/signup' , redirectifauthenticatedMiddleware , signupController );

//Route 5 After signing up in signup page
app.post('/users/signup' , redirectifauthenticatedMiddleware , storeuseraftersignupController );

//Route 6 - G2_test page
app.get('/g2test', authMiddleware, g2testController );

//Route 7 - 
app.get('/g2test/new', authMiddleware , getg2testController );

//Route 8 - 
app.post('/g2test/store', authMiddleware , storeg2testController );

//Route 9 - G_test page
app.get('/gtest', authMiddleware, gtestController );

//Route 10 - displays user details in G_test page
app.post('/gtest/display', displaygtestController );

//Route 11 - allows to edit details of user in G_test page
app.post('/display/edit/:license', updateController );

//Route 12 - updates user details after editting in G_test page
app.post('/display/edit/update/:license' , storeupdateController );

//Route 13 - Logout page
app.get('/auth/logout' , logoutController);

//Route 14: select a date
app.get('/appointment/selectedDate',auth2Middleware,matchDate)

//Route 15: appointments
app.post('/appointment/fetched_slots',auth2Middleware,appointment)

//Route 16: send data to database
app.post('/appointmentBooked', sendAppointmentDataController)

//Route 17: fetch data from appointments  in g2_test page
app.get("/g2_test/data", fetchAppointmentData);

//Route 18: fetch data from appointments in g_test page
app.get("/g_test/data", fetchAppointmentData);

//Route 19: update data in appointment collection in g2_test page
app.post("/g2_test/appointmentBooked", updateTimeSlotsG2)

//Route 20: update data in appointment collection in g_test page
app.post("/g_test/appointmentBooked", updateTimeSlotsG)

//Route 21: Examiner page
app.get('/examiner' , auth3Middleware, examinerController);





