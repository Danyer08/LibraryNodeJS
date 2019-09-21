'use strict'

const repository = require('../repositories/bookRepository.js')

const services = {
    getBooks: async () => {
        const books = await repository.getBooks();
        return books;
    },
    getBookById: async (id) => {
        const book = await repository.getBookById(id);
        return book;
    },
    getPagesByBookId: async (bookId) => {
        const pages = await repository.getPagesByBookId(bookId);
        return pages;
    }
}

module.exports = services;