'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let student = mongoose.Schema({
    name: String,
    address: String,
    phones: [
        {
            description: String,
            number: String
        }
    ],
});
module.exports = mongoose.model('Student', student);
