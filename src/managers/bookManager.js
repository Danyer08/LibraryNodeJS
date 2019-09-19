'use strict'

const repository = require('../repositories/bookRepository.js')

const services = {
    getBooks: () => {
        try {
            return repository.getBooks()
        }
        catch (error) {
            return error
        }
    }
}

module.exports = services