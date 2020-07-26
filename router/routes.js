const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const animalControllers = controllers.animalControllers

router.get('/', animalControllers.getAll);
router.get('/:index', animalControllers.getOne);
router.put('/:index', animalControllers.updateOne);
router.post('/new', animalControllers.createOne);
router.delete('/:index',animalControllers.deleteOne);

module.exports = router;