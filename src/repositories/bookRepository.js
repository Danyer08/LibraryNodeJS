"use strict"

const context = require('../dataLayer/models/main.js');

const queries = {
    getBooks: async () => {
        let booksResponse = [];
        await context.db.sequelize.model('Book').findAll().then(books => {
            booksResponse = books.map(book => book.dataValues);
        }).catch(error => {
            console.error(error);
        })

        return booksResponse;
    },
    getBookById: async (id) => {
        let book = await context.db.sequelize.models['Book'].findByPk(id);
        return book;
    }
}

module.exports = queries;