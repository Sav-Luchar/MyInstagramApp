const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const bodyParser = require('body-parser');
const passport = require ('passport');
const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Passport configuration
app.use(passport.initialize());
require ('./config/passport')(passport);

//DB Config
const db= require('./config/keys').mongoDB

//Connect to mongodb
mongoose
    .connect(db)
    .then(()=> console.log ('MongoDB is amazingly connected'))
    .catch(err=> console.log(err));

//First route
app.get("/",(req,res) => res.send("The Empress first Instagram App"));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 4000;
app.listen(port,() => console.log (`Server successfully running on port ${port}`));