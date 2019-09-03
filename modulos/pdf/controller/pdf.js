'use strict'

//const model = require('../../../utils/modelLoader');

const { pdf } = require('../../../App/models');

exports.read = (req, res) => {

    pdf.findAll({

    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.insert = (req, res) => {

    const dados = req.body;

    pdf
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

    pdf
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
    await pdf.bulkCreate(dados);
    
    try{
        req.io.sockets.in(box).emit('Api', 'cadastrou novos pdfs');
     
    } catch(err){
        console.log(err + ' - ' );
    }
   
    console.log('Finalizou');
    res.send(true);
 
    
}


exports.update = (req, res) => {

    const dados = req.body;

    pdf
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

    pdf
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