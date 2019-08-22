'use strict'

const express = require('express');
var cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const cliente = require('./modulos/Cliente/Cliente');
//const { cliente } = require('./App/models');

const app = express();
app.use((req, res, next) =>{
  console.log(req);
  req.io = io;
  console.log(res);
  return next();
});
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

cliente.init(app);
/*
cliente.findByPk(3).then(clientes=>{
    console.log(clientes.dataValues);
})*/

/*
cliente.findOne({
    where: {ME_CLIENTE: 'TV RIO'},
    attributes: ['id', ['CPF_CGC_CLIENTE', 'CGC']]
  }).then(clientes => {
    var { dataValues: valores } = clientes;

    console.log(`retorna apenas CNPJ - ${valores.CGC}`);

    console.log(valores);
  })
  */
/*
cliente.create({
    BAIRRO_END_CLIENTE: "CENTRO",
    CD_EMPRESA: 21,
    CEP_END_CLIENTE: "25803010",
    CIDADE_MUNICIPIO_END_CLIENTE: "TRES RIOS",
    CODIGO_ENDERECO_CLIENTE: "RES1",
    COD_CLIENTE: 168345,
    COD_PORTADOR_CLIENTE: "0013",
    COMPLEMENTO_END_CLIENTE: ". 165",
    CPF_CGC_CLIENTE: "024188630001",
    DATA_ATUALIZACAO_SALDO: null,
    DIGITO_VERIFICADOR_CPF_CGC: "09",
    ENDERECO_CLIENTE: "R. R PREF WALTER FRANKLIN, 165",
    IDENTIFICA_CGC_CPF: "2",
    ID_REG_EXCLUIDO: "S",
    INSCRICAO_ESTADUAL_CLIENTE: "0",
    INSCRICAO_MUNICIPAL_CLIENTE: "0",
    LIMITE_CREDITO_CLIENTE: null,
    ME_CLIENTE: "UNIODONTO T RIO",
    MNEMONICO_GRUPO_CLIENTE: null,
    NM_CLIENTE: "UNIODONTO T RIO",
    RAZAO_SOCIAL_CLIENTE: "UNIODONTO TRES RIOS COOP ODONTOLOGICA LT",
    SALDO_ANTERIOR: null,
    SALDO_ATUAL: null,
    SITUACAO_CREDITO_CLIENTE: "1",
    TIPO_DE_CLIENTE: " ",
    UF_END_CLIENTE: "RJ"
});*/

module.exports = app;