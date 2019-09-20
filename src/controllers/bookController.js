const manager = require('../managers/bookManager.js')
const url = require('url');

const httpActions = {
    getBooks: async (req, res) => {
        const books = await manager.getBooks();

        if (books) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(books));
        }

    },
    getBookById: async (req, res) => {
        const book = await manager.getBookById();

        if (!book) {
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(book));
    }
}

module.exports = httpActions;

