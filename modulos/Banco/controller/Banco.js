'use strict'

const model = require('../../../utils/modelLoader');

exports.read = (req, res) => {

    model.Banco.findAll({

    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.insert = (req, res) => {

    const dados = req.body;

    model.Banco
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

    model.Banco
        .update(dados, {
            where: {
                BanCodigo: req.query.BanCodigo
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

    model.Banco
        .destroy({
            where: {
                BanCodigo: dados.params.BanCodigo
            }
        })
        .then((rowDeleted) => {
            res.send(true);
        }, (err) => {
            console.log(err);
            res.send(false);
        });
};