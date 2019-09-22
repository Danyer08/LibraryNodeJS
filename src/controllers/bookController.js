const manager = require('../managers/bookManager.js');
const exceptions = require('./httpExceptions.js');
const response = require('../controllers/httpResponse.js');

const httpActions = {
    getBooks: async (req, res) => {
        try {
            const books = await manager.getBooks();
            response(res, 200, books);
        } catch (error) {
            exceptions.badRequest(res, error);
        }

    },
    getBookById: async (req, res, id) => {
        try {
            const book = await manager.getBookById(id);
            response(res, 200, book);
        } catch (error) {
            exceptions.badRequest(res, error);
        }
    }
}

module.exports = httpActions;

