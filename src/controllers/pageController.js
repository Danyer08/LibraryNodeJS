const manager = require('../managers/pageManager.js');
const exceptions = require('./httpExceptions.js');

const httpActions = {
    getPageByNumber: async (req, res, pageNumber, bookId, isHTML) => {
        try {
            const page = await manager.getPageByNumber(pageNumber, bookId, isHTML);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(page);
            res.end();
        } catch (error) {
            exceptions.badRequest(res, error);
        }
    },
    getPagesByBookId: async (req, res, bookId) => {
        try {
            const pages = await manager.getPagesByBookId(bookId);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(pages);
            res.end();
        } catch (error) {
            exceptions.badRequest(res, error);
        }
    }
}

module.exports = httpActions;

