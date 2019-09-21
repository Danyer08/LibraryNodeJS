'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    Book.hasMany(models.Page);
  };
  return Book;
};