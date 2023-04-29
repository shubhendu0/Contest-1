const Employee = require("../models/employeeModel");


// Add Employee
const addEmployee = async(req, res) => {
    let employee = new Employee(req.body);
    let result = await employee.save();
    if(result){
        res.status(201).json(result);
    }
    else{
        res.status(404).json({"error" : "failed"});
    }
}


// Get Employee
const getEmployee = async (req, res) => {
  const user = await Employee.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } 
  else {
    res.status(404).json({"error" : "Employee not found"});
  }
}


// Update Employee
const updateEmployee = async(req,res) => {
    let result = await Employee.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    if(result){
        res.status(200).json(result);
    }
    else{
        res.status(404).json({"error" : "Employee not found"});
    }
}


// Delete Employee
const deleteEmployee = async(req, res) => {
    let result = await Employee.delete(
        { "salary" : { $gt : 10000 } }
    );
    if(result){
        res.status(200).json({"error" : "Employees deleted successfully"});
    }
    else{
        res.status(404).json({"error" : "No employees found"});
    }
}


module.exports = {
    addEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee
}