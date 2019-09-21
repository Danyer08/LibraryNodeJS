const manager = require('../managers/bookManager.js')

const httpActions = {
    getBooks: async (req, res) => {
        const books = await manager.getBooks();

        try {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(books));
        } catch (error) {
            badRequest(res, error);
        }

    },
    getBookById: async (req, res, id) => {
        const book = await manager.getBookById(id);

        try {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(book));
        } catch (error) {
            badRequest(res, error);
        }
    },
    getPagesByBookId: async (req, res, bookId) => {
        const pages = await manager.getPagesByBookId(bookId);

        try {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(pages));
        } catch (error) {
            badRequest(res, error);
        }
    },
    notFoundHandler: (req, res) => {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify("Not Found"))
    }
}

const badRequest = (res, body) => {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(`Bad Request: ${body}`))
}

module.exports = httpActions;

