'use strict';
import mongoose = require ("mongoose");

let subject = mongoose.schema(
    {
        name: String,
        students : []
    }
);

module.exports = mongoose.model('Subject', subject);
