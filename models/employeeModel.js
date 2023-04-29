const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
        firstName : {
            type: String,
            required: [true, "Please provide name"]
        },
        lastName : {
            type: String,
            required: [true, "Please provide name"]
        },
        email : {
            type: String,
            required: [true, "Please provide email"],
            unique: [true, "This email is already in use"],
        },
        companyName : {
            type: String,
            required: [true, "Please provide password"]
        },
        salary: {
            type: Number,
            required: true,          
        },
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model("employees", employeeSchema);
module.exports = User;

