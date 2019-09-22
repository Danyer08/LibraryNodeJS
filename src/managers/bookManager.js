'use strict'

const repository = require('../repositories/bookRepository.js');
const bookDTO = require('../dtos/bookDTO.js');

const services = {
    getBooks: async () => {
        const books = await repository.getBooks();
        const booksResponse = books.map(book => new bookDTO(book.id, book.name, book.description, book.author));

        return JSON.stringify(booksResponse);
    },
    getBookById: async (id) => {
        const book = await repository.getBookById(id);
        const bookResponse = new bookDTO(book.id, book.name, book.description, book.author);

        return JSON.stringify(bookResponse);
    }
}

module.exports = services;