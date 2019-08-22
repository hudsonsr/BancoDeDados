'use strict'

module.exports = (sequelize, DataTypes) => {

    const cliente = sequelize.define('cliente', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_REG_EXCLUIDO:{
            type: DataTypes.INTEGER
        },
        CD_EMPRESA:{
            type: DataTypes.INTEGER
            },
        ME_CLIENTE:
            {type: DataTypes.STRING},
        NM_CLIENTE:
            {type: DataTypes.STRING},
        MNEMONICO_GRUPO_CLIENTE:
            {
                type: DataTypes.STRING
            },
        LIMITE_CREDITO_CLIENTE:
            {type: DataTypes.STRING},
        SITUACAO_CREDITO_CLIENTE:
            {type: DataTypes.STRING},
        TIPO_DE_CLIENTE:
            {type: DataTypes.STRING},
        DATA_ATUALIZACAO_SALDO:
            {type: DataTypes.STRING},
        SALDO_ANTERIOR:
            {type: DataTypes.STRING},
        SALDO_ATUAL:
            {type: DataTypes.STRING},
        CODIGO_ENDERECO_CLIENTE:
            {type: DataTypes.STRING},
        IDENTIFICA_CGC_CPF:
            {type: DataTypes.STRING},
        CPF_CGC_CLIENTE:
            {type: DataTypes.STRING},
        DIGITO_VERIFICADOR_CPF_CGC:
            {type: DataTypes.STRING},
        RAZAO_SOCIAL_CLIENTE:
            {type: DataTypes.STRING},
        ENDERECO_CLIENTE:
            {type: DataTypes.STRING},
        COMPLEMENTO_END_CLIENTE:
            {type: DataTypes.STRING},
        BAIRRO_END_CLIENTE:
            {type: DataTypes.STRING},
        CIDADE_MUNICIPIO_END_CLIENTE:
            {type: DataTypes.STRING},
        UF_END_CLIENTE:
            {type: DataTypes.STRING},
        CEP_END_CLIENTE:
            {type: DataTypes.STRING},
        INSCRICAO_ESTADUAL_CLIENTE:
            {type: DataTypes.STRING},
        INSCRICAO_MUNICIPAL_CLIENTE:
            {type: DataTypes.STRING},
        COD_PORTADOR_CLIENTE:
            {type: DataTypes.STRING},
        COD_CLIENTE:
            {type: DataTypes.STRING}        
    }, {
        freezeTableName: true,
        schema: '',
        tableName: 'clientes',
        timestamps: true
    });

    return cliente;
};