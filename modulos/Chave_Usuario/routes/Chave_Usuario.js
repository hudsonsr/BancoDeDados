'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/Chave_Usuario');

router.get('/listChave_Usuario', controller.read);
router.post('/saveChave_Usuario', controller.insert);
router.post('/saveManyChave_Usuario', controller.manyInserts);
router.post('/updateChave_Usuario', controller.update);
router.post('/deleteChave_Usuario', controller.delete);

module.exports = router;