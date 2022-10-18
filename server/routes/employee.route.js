var express = require('express');
var router = express.Router();
const Employee = require("../models/Employee")
const cors = require('cors');
const empJson = require('./employees.json');

router.use(cors());
router.get('/employee', async (req, res) => {
    try {
       Employee.find().then(employees => {
           res.send({data: employees})
       }).catch(error => {
           res.send(error)
       })
       //  res.send({data: empJson})
    }catch (e) {
        throw new Error(e)
    }
})

router.post("/employee", (req,res)=>{
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
            res.send({message: "employee create error"+err})
        })
})

router.delete("/employee/:id", (req, res) => {
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
})

router.put("/employee/:id", (req,res) =>{
    const id = req.params.id;
    Employee.findByIdAndUpdate(id, req.body, (err, employee)=>{
        if (err){
            res.send({message: "employee update failed"})
        } else {
            res.status(200).send(employee);
        }
    })
})
module.exports = router;