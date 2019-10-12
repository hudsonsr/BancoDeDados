'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/pdf');

router.get('/listpdf', controller.read);
router.post('/savepdf', controller.insert);
router.post('/saveManypdf', controller.manyInserts);
router.post('/updatepdf', controller.update);
router.post('/deletepdf', controller.delete);

module.exports = router;