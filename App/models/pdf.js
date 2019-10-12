'use strict'

module.exports = (sequelize, DataTypes) => {

    const pdf = sequelize.define('pdf', {
		 ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: {
            type: DataTypes.INTEGER
        },
        texto:{
            type: DataTypes.STRING}   
    }, {
        freezeTableName: true,
        schema: '',
        tableName: 'pdf',
        timestamps: false
    });

    return pdf;
};