'use strict';
import mongoose = require("mongoose");

let phone = mongoose.schema({
    description: String,
    number: String,
});

module.exports = mongoose.model('phone',phone);
