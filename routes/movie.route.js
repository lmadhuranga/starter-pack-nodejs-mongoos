const express = require('express');
const router = express.Router();

// Require the controllers
const MovieController = require('../controllers/MovieController');

router.get('/', MovieController.getAll);

router.post('/create', MovieController.create);

router.get('/:id', MovieController.get);

router.put('/:id/update', MovieController.update);

router.delete('/:id/delete', MovieController.delete);

module.exports = router;