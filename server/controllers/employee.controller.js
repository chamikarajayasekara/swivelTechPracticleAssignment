const Employee = require("../models/Employee");


const  getAllEmployees = (req,res) =>{
    try {
        Employee.find().then(employees => {
            res.send({data: employees})
        }).catch(error => {
            return error
        })
    }catch (e) {
        throw new Error(e)
    }
}

const getSingleEmployee = (req, res) =>{
    const id = req.params.id;
    Employee.findById(id, req.body, (err, employee)=>{
        if (err){
            res.send({message: "employee get failed"})
        } else {
            if (employee){
                res.status(200).send(employee);
            }else{
                res.status(400).send({message: "employee not found"})
            }
        }
    })
}
const createEmployees = (req,res) =>{
    const employeeData ={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber,
        gender:req.body.gender,
        photo:req.body.photo
    }
    Employee.create(employeeData)
        .then(employee => {
            res.json({status: employee?.emailAddress + " Registered"} )
        })
        .catch(err => {
            res.status(404).send({message: "employee create error  "+err})
        })
}

const updateEmployees = (req,res) =>{
    const id = req.params.id;
    Employee.findByIdAndUpdate(id, req.body, (err, employee)=>{
        if (err){
            res.send({message: "employee update failed"})
        } else {
            res.status(200).send(employee);
        }
    })
}
const deleteEmployees = (req,res) =>{
    const id = req.params.id;
    Employee.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
                });
            } else {
                res.send({
                    message: "Employee was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Employee with id=" + id
            });
        });
}

module.exports = {
    getAllEmployees,getSingleEmployee,createEmployees,updateEmployees,deleteEmployees
}