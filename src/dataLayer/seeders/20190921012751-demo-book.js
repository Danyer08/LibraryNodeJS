'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        name: 'La bella y la bestia',
        description: 'Historia de drama romantico',
        author: 'William Shakespeare',
        createdAt: '01-12-98',
        updatedAt: '01-12-98'
      },
      {
        name: 'El príncipe',
        description: 'El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo',
        author: 'Nicolás Maquiavelo',
        createdAt: '01-01-1532',
        updatedAt: '01-01-1532'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
