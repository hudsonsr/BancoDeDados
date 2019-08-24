'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerCliente = require('./routes/Cliente')

const models = [
    '../modulos/Cliente/model/Cliente'
]

exports.init = (app) => {

    app.use('/', routerCliente);

}