"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express.Router();
let studentScripts = require('../controllers/studentScripts');
router.get('/get:id', studentScripts.getStudent);
router.get('/get', studentScripts.getAllStudents);
router.post('/add', studentScripts.addStudent);
module.exports = router;
