'use strict'

//const model = require('../../../utils/modelLoader');

const { Chaves } = require('../../../App/models');

exports.read = (req, res) => {

    Chaves.findAll({

    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
};

exports.readOne = (req, res) => {
    const where = req.query.numero;
    console.dir({ where: {CveNumero: where} });
    Chaves
        .findAll( { where: {CveNumero: where} } )
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
};

exports.insert = (req, res) => {

    const dados = req.body;

    Chaves
        .build(
            dados
        )
        .save()
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.status(400).send( {error: error} );
        });
};


exports.inserir = (dados) => {
    
    Chaves
        .create(
            dados
        )
        .then((data) => {
            console.log(data);
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.status(400).send( {error: err} );
        });
};

exports.manyInserts = async (req, res) =>{
   
    const sala = 'connectionRoom';
    const dados = req.body;
    await Chaves.bulkCreate(dados);
    
    try{
        req.io.sockets.in(box).emit('Api', 'cadastrou novas Chaves');
     
    } catch(err){
        console.log(err + ' - ' );
    }
   
    console.log('Finalizou');
    res.send(true);
 
    
}


exports.update = (req, res) => {

    const dados = req.body;

    Chaves
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

    Chaves
        .destroy({
            where: {
                ID: dados.params.ID
            }
        })
        .then((rowDeleted) => {
            res.send(true);
        }, (err) => {
            console.log(err);
            res.status(400).send( {error: err} );
        });
};