'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerChave = require('./routes/Chave')

const models = [
    '../modulos/Chave/model/Chave'
]

exports.init = (app) => {

    app.use('/', routerChave);

}