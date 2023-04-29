require("dotenv").config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
    }
    catch(err){
        return console.log(err);
    }
}
connectDB();


const express = require("express");
const cors = require("cors");
const employeeRoute = require("../routes/employeeRoute");
const queryRoute = require("../routes/queryRoute");
const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


// Routes
app.use("/api/employee", employeeRoute);
app.use("/api/employee", queryRoute);


const port = process.env.PORT || 8000;
app.listen(port , (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server running at port ${port}`);
    }
});


