const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");


const employeeRouter = require('./routes/employee.route');
const e = require("express");

const app = express();
let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(
    'mongodb+srv://test:l9j8nZbo3ETlJ2uc@cluster0.2xxx9es.mongodb.net/practics_test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("connected")
    }).catch(err=>{
        console.log("not connected "+ err)
    })

app.use('/',employeeRouter);

let port = 8080;
app.listen(port, function() {
    console.log("App started in "+ port)
});


module.exports = app;