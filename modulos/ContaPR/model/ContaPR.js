'use strict'

module.exports = (sequelize, DataTypes) => {

    var ContaPRs = sequelize.define('ContaPR', {
        CprCodigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'CprCodigo'
        },
        CprCodOrigem: {
            type: DataTypes.INTEGER,
            field: 'CprCodOrigem',
            defaultValue: 1,
            allowNull: false 
        },
        CprCatCodigo: {
            type: DataTypes.INTEGER,
            field: 'CprCatCodigo',
            allowNull: false 
        },
        CprDataVenc: {
            type: DataTypes.DATE,
            field: 'CprDataVenc',
            allowNull: false 
        },
        CprValor: {
            type: DataTypes.DOUBLE,
            field: 'CprValor',
            allowNull: false 
        },
        CprNParcela: {
            type: DataTypes.INTEGER,
            field: 'CprNParcela',
            allowNull: false 
        },
        CprFormaPag: {
            type: DataTypes.INTEGER,
            field: 'CprFormaPag',
            defaultValue: null
        },
        CprDataPag: {
            type: DataTypes.DATE,
            field: 'CprDataPag',
            defaultValue: null 
        },
        CprReceita: {
            type: DataTypes.BOOLEAN,
            field: 'CprReceita',
            allowNull: false 
        },
        CprPago: {
            type: DataTypes.BOOLEAN,
            field: 'CprPago',
            defaultValue: 0,
            allowNull: false 
        },
        CprExcluida: {
            type: DataTypes.BOOLEAN,
            field: 'CprExcluida',
            defaultValue: 0,
            allowNull: false 
        },
        CprHistorico: {
            type: DataTypes.STRING(100),
            field: 'CprHistorico',
            allowNull: false 
        },
        CprValorPag: {
            type: DataTypes.DOUBLE,
            field: 'CprValorPag',
            defaultValue: 0,
            allowNull: false 
        },
        CprConferido: {
            type: DataTypes.BOOLEAN,
            field: 'CprConferido',
            defaultValue: 0,
            allowNull: false 
        },
        CprClinica: {
            type: DataTypes.INTEGER,
            field: 'CprClinica',
            defaultValue: 0,
            allowNull: false 
        },
        CprDataOrigem: {
            type: DataTypes.DATE,
            field: 'CprDataOrigem',
            defaultValue: null 
        },
        CprParcelaAtiva: {
            type: DataTypes.BOOLEAN,
            field: 'CprParcelaAtiva',
            defaultValue: 1,
            allowNull: false 
        },
        CprUsuCodigo: {
            type: DataTypes.BOOLEAN,
            field: 'CprUsuCodigo',
            defaultValue: null
        },
        CprDataBaixa: {
            type: DataTypes.DATE,
            field: 'CprDataBaixa',
            defaultValue: null 
        },
        CprDesUsuCodigo: {
            type: DataTypes.INTEGER,
            field: 'CprDesUsuCodigo',
            defaultValue: null
        },
        CprDesMotCodigo: {
            type: DataTypes.INTEGER,
            field: 'CprDesMotCodigo',
            defaultValue: null
        },
        CprDesMotivo: {
            type: DataTypes.STRING(200),
            field: 'CprDesMotivo',
            defaultValue: false 
        }
    }, {
        freezeTableName: true,
        schema: '',
        tableName: 'ContaPR',
        timestamps: false,
        classMethods: {
            associate: (model) => {
                ContaPRs.belongsTo(model.Banco, { foreignKey: 'CprFormaPag' });
            }
        }
    });

    return ContaPRs;
};