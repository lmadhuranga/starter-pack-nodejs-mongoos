var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var quality_controller = require('../controllers/quality');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', quality_controller.test);

module.exports = router;