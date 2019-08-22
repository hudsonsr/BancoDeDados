'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/Cliente');

router.get('/listCliente', controller.read);
router.post('/saveCliente', controller.insert);
router.post('/saveManyCliente', controller.manyInserts);
router.post('/updateCliente', controller.update);
router.post('/deleteCliente', controller.delete);

module.exports = router;