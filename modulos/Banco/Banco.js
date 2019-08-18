'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerBanco = require('./routes/Banco')

const models = [
    '../modulos/Banco/model/Banco'
]

exports.init = (app) => {

    app.use('/', routerBanco);

}