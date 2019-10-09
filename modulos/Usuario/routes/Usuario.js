'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/Usuario');

router.get('/listFuncionarios', controller.read);

module.exports = router;