const bookController = require('./controllers/bookController.js')
const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == '/api/books' && req.method === 'GET') {
        bookController.getBooks(req, res);
    }
    else if (reqUrl.pathname == '/api/books/1' && req.method === 'GET') {
        bookController.getBookById(req, res);
    }

});
