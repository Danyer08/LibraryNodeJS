'use strict'

const repository = require('../repositories/bookRepository.js')

const services = {
    getBooks: async () => {
        try {
            const books = await repository.getBooks()
            return books
        }
        catch (error) {
            console.error('Failed to get books: ', error)
        }
    },
    getBookById: async (id) => {
        try {
            const book = await repository.getBookById(id);
            return book;
        }
        catch (error) {
            console.error('Failed to get book by id: ', error)
        }
    }
}

module.exports = services