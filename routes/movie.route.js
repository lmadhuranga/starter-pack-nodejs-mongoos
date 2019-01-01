var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var movie_controller = require('../controllers/movie');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', movie_controller.test);


router.post('/create', movie_controller.movie_create);

router.get('/:id', movie_controller.movie_details);

router.put('/:id/update', movie_controller.movie_update);

router.delete('/:id/delete', movie_controller.movie_delete);


module.exports = router;