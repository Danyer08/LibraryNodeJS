const manager = require('../managers/bookManager.js');
const exceptions = require('./httpExceptions.js');

const httpActions = {
    getBooks: async (req, res) => {
        try {
            const books = await manager.getBooks();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(books);
        } catch (error) {
            exceptions.badRequest(res, error);
        }

    },
    getBookById: async (req, res, id) => {
        try {
            const book = await manager.getBookById(id);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(book);
        } catch (error) {
            exceptions.badRequest(res, error);
        }
    }
}

module.exports = httpActions;

