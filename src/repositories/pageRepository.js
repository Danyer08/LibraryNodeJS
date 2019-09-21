'use strict'

const context = require('../dataLayer/models/main.js');

const queries = {
    getPage: async (id, bookId) => {
        try {
            return await context.db.sequelize.model('Page').findAll({ where: { id: id, bookId: bookId } })
        }
        catch (error) {
            return error;
        }
    }
}

module.exports = queries;