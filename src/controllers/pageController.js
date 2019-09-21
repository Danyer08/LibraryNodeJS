const manager = require('../managers/pageManager.js');
const exceptions = require('./httpExceptions.js');

const httpActions = {
    getPageById: async (req, res, id, bookId) => {
        const page = await manager.getPageById(id, bookId);

        try {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(page));
        } catch (error) {
            exceptions.badRequest(res, error);
        }
    }
}

module.exports = httpActions;

