const express = require('express');
const router = express.Router();

const createController = require("../controllers/createController")
const readController = require("../controllers/readController")
const updateController = require("../controllers//updateController")
const deleteController = require("../controllers/deleteController")


router.post('/createPost', createController.createPost);
router.get('/readPost',     readController.readPost);
router.put('/updatePost',  updateController.updatePost);
router.put('/deletePost',  deleteController.deletePost);

module.exports =  router;

