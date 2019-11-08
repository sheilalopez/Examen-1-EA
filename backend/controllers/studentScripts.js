'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('../models/Student');
let mongoose = require('mongoose');
let Student = mongoose.model('Student');
let ObjectId = require('mongodb').ObjectID;
exports.addStudent = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let student = req.body.student;
        let newStudent = new Student(student);
        let result = yield newStudent.save();
        if (result) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    });
};
exports.getStudent = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let s = req.params.id;
        let student = yield Student.findOne({ _id: s });
        if (student) {
            res.status(200).json(student);
        }
        else {
            res.status(424).send({ message: 'Student not found' });
        }
    });
};
exports.getAllStudents = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let students = yield Student.find();
        res.status(200).json(students);
    });
};
