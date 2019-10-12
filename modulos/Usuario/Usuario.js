'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerUsuario = require('./routes/Usuario')

const models = [
    '../modulos/Usuario/model/Usuario'
]

exports.init = (app) => {

    app.use('/', routerUsuario);

}