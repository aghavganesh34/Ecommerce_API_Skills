const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");


require("dotenv").config();

const mongoose = require('mongoose');
const routes = require('./router/index');
const PORT = 8000 || process.env.PORT;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const db=require('./config/mongoose')
app.use("/", routes);
app.listen(PORT, (err) => {
    if(err){
        throw new Error(err);
        
    }
    console.log(`server is running on port ${PORT}`);
});
