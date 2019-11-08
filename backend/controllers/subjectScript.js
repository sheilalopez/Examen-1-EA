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
require('../models/Subject');
require('../models/Student');
let mongoose = require('mongoose');
let Subject = mongoose.model('Subject');
let Student = mongoose.model('Student');
let ObjectId = require('mongodb').ObjectID;
exports.addSubject = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let subject = req.body.subject;
        let newSubject = new Subject(subject);
        let result = yield newSubject.save();
        res.status(200).send(result);
    });
};
exports.addStudentToSubject = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let subject = req.body.subject;
        let student = yield Student.findOne({ name: req.body.student.name });
        let result = yield Subject.updateOne({ name: subject.name }, { $push: { students: ObjectId(student._id) } });
        res.status(200).send(result);
    });
};
exports.getAllSubjects = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let subjects = yield Subject.find()
            .populate('students');
        if (subjects) {
            res.status(200).json(subjects);
        }
        else {
            res.status(424).send({ message: 'Subjects not found' });
        }
    });
};
