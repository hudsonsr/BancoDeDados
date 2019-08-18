'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/Banco');

router.get('/listBanco', controller.read);
router.post('/saveBanco', controller.insert);
router.post('/updateBanco', controller.update);
router.post('/deleteBanco', controller.delete);

module.exports = router;