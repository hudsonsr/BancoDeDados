'use strict'

//const model = require('../../../utils/modelLoader');

const { cliente } = require('../../../App/models');

exports.read = (req, res) => {

    cliente.findAll({

    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.insert = (req, res) => {

    const dados = req.body;

    cliente
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

exports.manyInserts = (req, res) =>{
    
    const dados = req.body;
    
    cliente
        .bulkCreate(
            dados
        ).then(() => {             
            console.log('Finalizou');
            res.send(true);
        });
}

exports.update = (req, res) => {

    const dados = req.body;

    cliente
        .update(dados, {
            where: {
                ID: req.query.ID
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

    Cliente
        .destroy({
            where: {
                ID: dados.params.ID
            }
        })
        .then((rowDeleted) => {
            res.send(true);
        }, (err) => {
            console.log(err);
            res.send(false);
        });
};