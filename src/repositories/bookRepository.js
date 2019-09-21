"use strict"

const context = require('../dataLayer/models/main.js');

const queries = {
    getBooks: async () => {
        try {
            return await context.db.sequelize.models('Book').findAll();
        } catch (error) {
            console.error('Error Ocurred: ', error);
        }
    },
    getBookById: async (id) => {
        try {
            return await context.db.sequelize.model('Book').findByPk(id);
        } catch (error) {
            console.error('Error Ocurred: ', error);
        }
    },
    getPagesByBookId: async (bookId) => {
        try {
            return await context.db.sequelize.model('Page').findAll({ where: { bookId: bookId } });
        } catch (error) {
            console.error('Error Ocurred: ', error);
        }
    }
}

module.exports = queries;