'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let subject = mongoose.Schema({
    name: String,
    students: [{ type: mongoose.Types.ObjectId, ref: 'Student' }]
});
module.exports = mongoose.model('Subject', subject);
