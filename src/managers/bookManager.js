'use strict'

const repository = require('../repositories/bookRepository.js')

const services = {
    getBooks: () => {
        try {
            const books = repository.getBooks()
            return books
        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = services