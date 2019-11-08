'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let phone = mongoose.schema({
    description: String,
    number: String,
});
module.exports = mongoose.model('phone', phone);
