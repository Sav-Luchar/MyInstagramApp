const express = require('express');
const mongoose = require('mongoose');
const app = express();

//DB Config
const db= require('./config/keys').mongoDB

//Connect to mongodb
mongoose
    .connect(db)
    .then(()=> console.log ('MongoDB is amazingly connected'))
    .catch(err=> console.log(err));

//First route
app.get('/',(req,res) => res.send('The Empress first Instagram App'));
const port = 4000;
app.listen(port,() => console.log (`Server successfully running on port ${port}`));