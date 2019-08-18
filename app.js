'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const banco = require('./modulos/Banco/Banco');
const contapr = require('./modulos/ContaPR/ContaPR');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

banco.init(app);
contapr.init(app);

module.exports = app;