'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chave_Usuario = sequelize.define('Chave_Usuario', {
    ChUs_id: DataTypes.INTEGER,
    ChUs_UsuCodigo: DataTypes.INTEGER,
    ChUs_DataEntrega: DataTypes.DATE,
    ChUs_DataDevolucao: DataTypes.DATE
  }, {
    freezeTableName: true,
    schema: '',
    tableName: 'Chave_Usuario',
    timestamps: true
  });
  Chave_Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Chave_Usuario;
};