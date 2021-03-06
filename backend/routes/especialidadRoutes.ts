import express = require('express');
let router: express.Router = express.Router();

let especialidadScripts = require('../controllers/especialidadScripts');

router.get('/get', especialidadScripts.getAllEspecialidades);
router.post('/add',especialidadScripts.addEspecialidad);
router.post('/addStudent',especialidadScripts.addStudentToEspecialidad);

module.exports = router;
