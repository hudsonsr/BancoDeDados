'use strict';
module.exports = (sequelize, DataTypes) => {
  const Box = sequelize.define('Box', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    BoxNome: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [2,15]
      }
    },
    BoxCodigo: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    BoxUsuCodigo: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
     BoxMensagem: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [2,200]
      }
    },
    BoxLido: DataTypes.BOOLEAN,
    BoxExcluido: DataTypes.BOOLEAN,
    BoxDataCriacao: DataTypes.DATE
  }, { 
    freezeTableName: true,
    schema: '',
    tableName: 'Box',
    timestamps: false
  });
  Box.associate = function(models) {
    // associations can be defined here
  };
  return Box;
};