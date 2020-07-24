const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const animalControllers = controllers.animalControllers

router.get('/', animalControllers.getAll);
router.get('/:index', animalControllers.getOne);

module.exports = router;