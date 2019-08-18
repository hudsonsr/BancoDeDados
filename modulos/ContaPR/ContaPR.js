'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerContaPR = require('./routes/ContaPR')

const models = [
    '../modulos/ContaPR/model/ContaPR'
]

exports.init = (app) => {

    app.use('/', routerContaPR);

}