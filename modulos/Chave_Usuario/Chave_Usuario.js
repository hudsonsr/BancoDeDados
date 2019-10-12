'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerChave_Usuario = require('./routes/Chave_Usuario')

const models = [
    '../modulos/Chave_Usuario/model/Chave_Usuario'
]

exports.init = (app) => {

    app.use('/', routerChave_Usuario);

}