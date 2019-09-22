const manager = require('../managers/pageManager.js');
const exceptions = require('./httpExceptions.js');
const response = require('../controllers/httpResponse.js');

const httpActions = {
    getPageByNumber: async (req, res, pageNumber, bookId, isHTML) => {
        try {
            const page = await manager.getPageByNumber(pageNumber, bookId, isHTML);
            response(res, 200, page.body, page.contentType);
        } catch (error) {
            exceptions.badRequest(res, error);
        }
    },
    getPagesByBookId: async (req, res, bookId) => {
        try {
            const pages = await manager.getPagesByBookId(bookId);
            response(res, 200, pages);
        } catch (error) {
            exceptions.badRequest(res, error);
        }
    }
}

module.exports = httpActions;

