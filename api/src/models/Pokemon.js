require('dotenv').config();
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID, // Universally Unique Identifier garantiza IDs únicos y globales.
      defaultValue: DataTypes.UUIDV4, // Genera UUIDs aleatorios (versión 4)
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [0, 20]
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    height:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    weight:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 9999
      }
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false, 
  });
};
