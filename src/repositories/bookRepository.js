"use strict"

const context = require('../dataLayer/models/main.js');

const queries = {
    getBooks: async () => {
        return await context.db.sequelize.model('Book').findAll();
    },
    getBookById: async (id) => {
        return await context.db.sequelize.model('Book').findByPk(id);
    }
}

module.exports = queries;