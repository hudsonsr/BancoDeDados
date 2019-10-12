'use strict'

//const model = require('../../../utils/modelLoader');

const { Usuario } = require('../../../App/models');

exports.read = (req, res) => {
    const { UsuAtivo } = req.query;

    Usuario.findAll({
        where: { UsuAtivo }
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
};
