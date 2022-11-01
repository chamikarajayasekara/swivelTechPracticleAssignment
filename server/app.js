const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require("dotenv");
dotenv.config();

const employeeRouter = require('./routes/employee.route');
const connectDB = require("./config/db");
const e = require("express");

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//DB
connectDB().then(r => r);
//Routes
app.use('/',employeeRouter);

let port = process.env.PORT;
app.listen(port, function() {
    console.log("App started in "+ port)
});


module.exports = app;
