const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const animalControllers = controllers.animalControllers

router.get('/', animalControllers.getAll);

module.exports = router;