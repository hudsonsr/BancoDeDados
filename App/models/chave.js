'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chave = sequelize.define('Chaves', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    CveNumero: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [2,10]
      }
    },
    CveDescricao: DataTypes.STRING,
    CveAtivo: DataTypes.BIGINT,
    CveAlocada: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    }
  }, { 
    freezeTableName: true,
    schema: '',
    tableName: 'Chaves',
    timestamps: false
  });
  Chave.associate = function(models) {
    // associations can be defined here
  };
  return Chave;
};