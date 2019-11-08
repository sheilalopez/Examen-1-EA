'use strict';
import mongoose = require ("mongoose");
let especialidad = mongoose.Schema(
    {
        name: String,
        students: [{type: mongoose.Types.ObjectId, ref: 'Student'}]

    }
);

module.exports = mongoose.model('Especialidad', especialidad);
