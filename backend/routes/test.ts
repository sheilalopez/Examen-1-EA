import express = require('express');
let router: express.Router = express.Router();

let testScripts = require('../controllers/test');

router.get('/get', testScripts.test);

router.post('/post', testScripts.test);

module.exports = router;
