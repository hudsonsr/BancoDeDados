'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/Box');

router.get('/buscarBox', controller.readOne);
router.post('/saveBox', controller.insert);
router.post('/saveManyBox', controller.manyInserts);
router.put('/updateBox/:BoxUsuCodigo', controller.update);
router.delete('/deleteBox/:ID', controller.delete);

module.exports = router;