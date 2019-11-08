import express = require('express');
let router: express.Router = express.Router();

let subjectScripts = require('../controllers/subjectScripts');

router.get('/get', subjectScripts.getAllSubjects);
router.post('/addSubject', subjectScripts.addSubject);
router.post('/addStudent', subjectScripts.addStudentToSubject);
//router.get('/delete/:name', subjectScripts.deleteSubject);

module.exports = router;
