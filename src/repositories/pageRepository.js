'use strict'

const context = require('../dataLayer/models/main.js');

const queries = {
    getPage: async (pageNumber, bookId) => {
        return await context.db.sequelize.model('Page').findAll({ where: { bookId: bookId, number: pageNumber } });
    },
    getPagesByBookId: async (bookId) => {
        return await context.db.sequelize.model('Page').findAll({ where: { bookId: bookId } });
    }
}

module.exports = queries;