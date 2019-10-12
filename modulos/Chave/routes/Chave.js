'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/Chave');

router.get('/listChave', controller.read);
router.get('/buscarChave', controller.readOne);
router.post('/saveChave', controller.insert);
router.post('/saveManyChave', controller.manyInserts);
router.post('/updateChave', controller.update);
router.post('/deleteChave', controller.delete);

module.exports = router;