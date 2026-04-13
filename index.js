const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectMongoDB = require('./config/db.js');

dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    return res.send("Welcome to Home Page")
})

app.get("/home", (req, res)=>{
    return res.json({
        success:true,
        message:"Welcome to Home Page"
    })
})

app.listen(PORT, () => {
    console.log("Listening to port : ", PORT)
    connectMongoDB();
})