'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    UsuCodigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    UsuMatricula: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [6]
      }
    },
    UsuNome: DataTypes.STRING,
    UsuAtivo: DataTypes.BOOLEAN,
  }, { 
    freezeTableName: true,
    schema: '',
    tableName: 'Usuario',
    timestamps: false
  });
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};