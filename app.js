const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const env = require('dotenv')
const mongoose = require('mongoose')


// router imports
const usersRouter = require('./routes/users')
const stallRouter = require('./routes/stalls')

// env config
env.config()

// db
const url = "mongodb://localhost:27017/food_db"
const connect = mongoose.connect(url, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true})
connect.then(db => console.log("Connected to db successfully")).catch(err=> console.log(err))

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/users', usersRouter)
app.use('/stalls', stallRouter)

module.exports = app;
