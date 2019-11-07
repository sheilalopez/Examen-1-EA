"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("errorhandler");
//Import routes
let testRouter = require('./routes/test');
let subjectRouter = require('./routes/subjectRoutes');
let studentRouter = require('./routes/studentRoutes');
//Server variable initialization
let app = express();
app.use(cors());
app.use(bodyParser());
app.use(errorHandler());
app.use('/test', testRouter);
app.use('/subject', subjectRouter);
app.use('/student', studentRouter);
//Make app listen on port 3000
app.listen(3000);
console.log('Server listening on port 3000');
module.exports = app;
//Mongo database connection
mongoose.connect("mongodb://localhost:27017/minim1", {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    autoReconnect: true,
    useUnifiedTopology: true,
    reconnectInterval: 500
}).then(() => {
    console.log('Connection to the database successful');
}).catch(err => {
    console.log(`Database error: ${err.message}`);
});
//Handle database connection events
mongoose.connection.on('reconnected', () => {
    console.log('Database reconnected');
});
mongoose.connection.on('error', (err) => {
    console.log(`Database error: ${err.message}`);
});
mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
    //If database is disconnected it wil try again
    mongoose.connect("mongodb://localhost:27017/minim1", {
        useNewUrlParser: true,
        reconnectTries: Number.MAX_VALUE,
        autoReconnect: true,
        useUnifiedTopology: true,
        reconnectInterval: 500
    });
});
