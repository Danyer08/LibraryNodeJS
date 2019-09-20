'use strict';
module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define('Page', {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    description: DataTypes.STRING,
    bookId: DataTypes.NUMBER
  }, {});
  Page.associate = function (models) {
    Page.belongsTo(models.Book);
  };
  return Page;
};