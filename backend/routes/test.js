"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express.Router();
let testScripts = require('../controllers/testScripts');
router.get('/get', testScripts.test);
router.post('/post', testScripts.test);
module.exports = router;
