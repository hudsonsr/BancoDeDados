'use strict'

const model = require('../../../utils/modelLoader');

exports.read = (req, res) => {

    model.ContaPR.findAll({
        include: [
            { model: model.Banco }
        ]
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.readLimit = (req, res) => {

    model.ContaPR.findAndCountAll({
        include: [
            { model: model.Banco }
        ],
        limit: 12,
        offset: 12
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};



exports.insert = (req, res) => {

    const dados = req.body;

    model.ContaPR
        .build(
            dados
        )
        .save()
        .then((data) => {
            res.send(true);
        }).catch((error) => {
            console.log(error);
            res.send(false);
        });
};

exports.update = (req, res) => {

    const dados = req.body;

    model.ContaPR
        .update(dados, {
            where: {
                CprCodigo: req.query.CprCodigo
            }
        })
        .then((data) => {
            res.send(true);
        }).catch((error) => {
            console.log(error);
            res.send(false);
        });
};

exports.delete = (req, res) => {

    const dados = req.body;

    model.ContaPR
        .destroy({
            where: {
                CprCodigo: dados.params.CprCodigo
            }
        })
        .then((rowDeleted) => {
            res.send(true);
        }, (err) => {
            console.log(err);
            res.send(false);
        });
};