'use strict'

const { Box } = require('../../../App/models');

exports.readOne = (req, res) => {
    const { BoxNome, BoxCodigo, BoxUsuCodigo, BoxExcluido } = req.query;
    let where = {};
    if(BoxNome){
        where = { ...where, BoxNome }
    }
    if(BoxCodigo){
        where = { ...where, BoxCodigo }
    }
    if(BoxExcluido){
        where = { ...where, BoxExcluido }
    }
    if(BoxUsuCodigo){
        where = { ...where, BoxUsuCodigo }
    }

    console.dir( { where });

    Box
        .findAll( { where } )
        .then((data) => {
           
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
};

exports.insert = (req, res) => {
    
    const dados = req.body;
    Box
        .build(
            dados
        )
        .save()
        .then((retorno) => {
           
            try{
                const socketDono = req.usuariosConectados[retorno.BoxUsuCodigo];

                if(socketDono){
                    let data =[];
                    data.push( retorno );
                    req.io.to(socketDono).emit('Mensagem', data);
                }              
             
            } catch(err){
                console.log(err + ' - ' );
            }
           
            res.send(retorno);
        }).catch((error) => {
            console.log(error);
            res.status(400).send( {error: error} );
        });
};


exports.inserir = (dados) => {
    
    Box
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
    await Box.bulkCreate(dados);
    
    try{
        req.io.sockets.in(box).emit('Api', 'cadastrou novas Box');
     
    } catch(err){
        console.log(err + ' - ' );
    }
   
    console.log('Finalizou');
    res.send(true);
 
    
}


exports.update = (req, res) => {

    const dados = req.body;

    Box
        .update(dados, {
            where: {
            BoxUsuCodigo: req.params.BoxUsuCodigo
            }
        })
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.status(400).send(false);
        });
};

exports.delete = (req, res) => {

    const _id = req.params.ID;

    Box
        .destroy({
            where: {
                id: _id
            }
        })
        .then((rowDeleted) => {
            res.send(true);
        }, (err) => {
            console.log(err);
            res.status(400).send( {error: err} );
        });
};