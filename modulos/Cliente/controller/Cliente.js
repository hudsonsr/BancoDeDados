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

exports.manyInserts = async (req, res) =>{
   
    const sala = 'connectionRoom';
    const dados = req.body;
    await cliente.bulkCreate(dados);
    
    try{
        req.io.sockets.in(box).emit('Api', 'cadastrou novos clientes');
     
    } catch(err){
        console.log(err + ' - ' );
    }
   
    console.log('Finalizou');
    res.send(true);
 
    
}

exports.chat = (req, res) => {
    const { para , mensagem } = req.body;
    try{
        req.io.sockets.in(para).emit('Api', mensagem);
        res.send(para);
    } catch(err){
        console.log(err + ' - ' );
        res.send('error');
    }
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