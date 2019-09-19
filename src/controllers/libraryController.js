const manager = require('../managers/bookManager.js')
const url = require('url');

const httpActions = {
    getBooks: (req, res) => {
        const response = {
            data: manager.getBooks()
        };

        if (response.data) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(response));
        }

    },
    createBook: (req, res) => {
        res.statusCode = 200,
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify("Book created"))
    }
}

module.exports = httpActions

