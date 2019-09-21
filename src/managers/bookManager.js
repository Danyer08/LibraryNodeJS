'use strict'

const repository = require('../repositories/bookRepository.js')

const services = {
    getBooks: async () => {
        const books = await repository.getBooks();
        const booksResponse = books.map(book => { book.id, book.name, book.description, book.author });

        return booksResponse;
    },
    getBookById: async (id) => {
        const book = await repository.getBookById(id);
        const bookResponse = {
            id: book.id,
            name: book.name,
            description: book.description,
            author: book.author
        }

        return bookResponse;
    },
    getPagesByBookId: async (bookId) => {
        const pages = await repository.getPagesByBookId(bookId);
        const pagesResponse = pages.map(page => { page.id, page.description });

        return pagesResponse;
    }
}

module.exports = services;