'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pages', [
      {
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        bookId: 1,
        number: 1,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        bookId: 1,
        number: 2,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'Cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
        bookId: 1,
        number: 3,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        bookId: 1,
        number: 4,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        bookId: 2,
        number: 1,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'Cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
        bookId: 2,
        number: 2,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pages', null, {});
  }
};
