const libraryController = require('./controllers/libraryController.js')
const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true)

    if (reqUrl.pathname == '/api' && req.method === 'GET') {
        libraryController.getBooks(req, res)
    }

});
