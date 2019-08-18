'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/ContaPR');

router.get('/listContaPR', controller.read);
router.post('/saveContaPR', controller.insert);
router.post('/updateContaPR', controller.update);
router.post('/deleteContaPR', controller.delete);

module.exports = router;