'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerBox = require('./routes/Box')

const models = [
    '../modulos/Box/model/Box'
]

exports.init = (app) => {

    app.use('/', routerBox);

}