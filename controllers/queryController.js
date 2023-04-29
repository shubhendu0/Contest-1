const Employee = require("../models/employeeModel");


// Get Employee
const getEmployees = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const user = await Employee.find().sort("salary").limit(page*limit);
  if (user) {
    res.status(200).json(user);
  } 
  else {
    res.status(404).json({"error" : "Employee not found"});
  }
}


module.exports = {
    getEmployees,
}