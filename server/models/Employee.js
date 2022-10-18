
const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
})

const employee = (module.exports  = mongoose.model('Employee', EmployeeSchema))
