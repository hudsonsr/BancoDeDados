'use strict'

//const model = require('../../../utils/modelLoader');

const { Chave_Usuario } = require('../../../App/models');

exports.read = (req, res) => {

    Chave_Usuario.findAll({

    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.insert = (req, res) => {

    const dados = req.body;

    Chave_Usuario
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


exports.inserir = (dados) => {

    Chave_Usuario
        .create(
            dados
        )
        .then((data) => {
            console.log(data);
            return true;
        }).catch((error) => {
            console.log(error);
            return false;
        });
};

exports.manyInserts = async (req, res) =>{
   
    const sala = 'connectionRoom';
    const dados = req.body;
    await Chave_Usuario.bulkCreate(dados);
    
    try{
        req.io.sockets.in(box).emit('Api', 'cadastrou novos Chave_Usuarios');
     
    } catch(err){
        console.log(err + ' - ' );
    }
   
    console.log('Finalizou');
    res.send(true);
 
    
}


exports.update = (req, res) => {

    const dados = req.body;

    Chave_Usuario
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

    Chave_Usuario
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