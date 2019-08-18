'use strict'

module.exports = (sequelize, DataTypes) => {

    const Bancos = sequelize.define('Banco', {
        BanCodigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'BanCodigo'
        },
        BanNome: {
            type: DataTypes.STRING(50),
            field: 'BanNome'
        },
        BanSaldo: {
            type: DataTypes.DOUBLE,
            field: 'BanSaldo',
            allowNull: false 
        },
        BanTipo: {
            type: DataTypes.BOOLEAN,
            field: 'BanTipo',
            defaultValue: 0,
            allowNull: false 
        },
        BanAtivo: {
            type: DataTypes.BOOLEAN,
            field: 'BanAtivo',
            allowNull: false 
        }
    }, {
        freezeTableName: true,
        schema: '',
        tableName: 'Banco',
        timestamps: false
    });

    return Bancos;
};