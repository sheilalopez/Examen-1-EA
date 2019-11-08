'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let subject = mongoose.schema({
    name: String,
    students: []
});
module.exports = mongoose.model('Subject', subject);
