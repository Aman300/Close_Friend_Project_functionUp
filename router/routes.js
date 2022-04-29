const express = require('express');
const router = express.Router();

const AnimalsController = require("../controller/AnimalController");


router.post('/dog', AnimalsController.dog);
router.put('/deleteDog/:id', AnimalsController.deleteDog);
router.get('/getdog ', AnimalsController.getdog );
router.put('/updatedog/:id ', AnimalsController.updatedog );

module.exports =  router;