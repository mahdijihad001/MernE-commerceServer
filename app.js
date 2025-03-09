const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("mongo-sanitize");
const path = require("path");
const hpp = require("hpp");
const bodyParser = require("body-parser");

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-8', 
	legacyHeaders: false, 
})
// Middleware
app.use(cors());
// app.use(limiter);
app.use(cors());
app.use(xssClean());
app.use(cookieParser());
// app.use(mongoSanitize);
app.use(helmet())
app.use(hpp());
app.use(express.json({limit : "50mb"}));
app.use(express.urlencoded({extended : true , limit : "50mb"}));
app.use(bodyParser.json());
async function main() {
    await mongoose.connect(process.env.mongoose_url);

};

app.get("/", (req, res) => {
    res.status(200).send({
        message: "MERN e-commerce server runing now!"
    })
});

app.use((req , res , next) =>{
    res.status(404).send({
        message : "Route not found"
    })
})


main().then(() =>{
    console.log("Mongoose Connect success");
}).catch((err) =>{
    console.log("Mongoose connection error");
})



module.exports = app