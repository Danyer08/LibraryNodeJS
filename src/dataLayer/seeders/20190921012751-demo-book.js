'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Books', [{
        name: 'La bella y la bestia',
        description: 'Historia de drama romantico',
        author: 'William Shakespeare',
        createdAt: '01-12-98',
        updatedAt: '01-12-98'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Books', null, {});
  }
};
