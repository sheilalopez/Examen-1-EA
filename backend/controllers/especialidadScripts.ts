'use strict';
export {};

require('../models/Subject');
require('../models/Student');
require('../models/Especialidad');
let mongoose = require('mongoose');
let Student = mongoose.model('Student');
let Especialidad = mongoose.model('Especialidad');
let ObjectId = require('mongodb').ObjectID;

exports.getAllEspecialidades = async function(req, res){
    let especialidades = await Especialidad.find().populate('especialidades');
    if(especialidades) {
        res.status(200).json(especialidades);
    } else {
        res.status(424).send({message: 'Especialidades not found'});
    }

};
exports.addEspecialidad = async function (req, res){
    let especialidad = req.body.especialidad;
    let newEspecialidad = new Especialidad(especialidad);
    let result = await newEspecialidad.save();
    res.status(200).send(result);
};
