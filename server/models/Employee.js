
const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:6,
        maxLength:10
    },
    lastName:{
        type:String,
        required:true,
        minLength:6,
        maxLength:10
    },
    emailAddress:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true,
        maxLength:12
    },
    gender:{
        type:String,
        required:true
    },
    photo:{
        type:String,
    }
})

const employee = (module.exports  = mongoose.model('Employee', EmployeeSchema))
