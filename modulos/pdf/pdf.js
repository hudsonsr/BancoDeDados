'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerpdf = require('./routes/pdf')

const models = [
    '../modulos/pdf/model/pdf'
]

exports.init = (app) => {

    app.use('/', routerpdf);

}