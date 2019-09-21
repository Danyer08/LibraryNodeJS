const bookController = require('./controllers/bookController.js')
const http = require('http');

module.exports = http.createServer((req, res) => {
    const currentURL = new URL(`http://localhost:8000${req.url}`);
    const endpoints = {
        '/api/books': () => {
            return {
                'GET': () => {
                    const queryParams = currentURL.searchParams;
                    const id = queryParams.get('id')
                    if (id) {
                        bookController.getBookById(req, res, id);
                    }
                    else {
                        bookController.getBooks(req, res);
                    }
                }
            }
        },
        '/api/books/pages': () => {
            return {
                'GET': () => {
                    const queryParams = currentURL.searchParams;
                    const bookId = queryParams.get('bookId');
                    bookController.getPagesByBookId(req, res, bookId);
                }

            }
        }
    }

    const executeHttpMethod = endpoints[currentURL.pathname];
    executeHttpMethod !== undefined ? executeHttpMethod()[req.method]() : bookController.notFoundHandler(req, res);
});
