const http = require('http');
const environment = require('./environment/environment.js')
const bookController = require('./controllers/bookController.js')
const exceptions = require('./controllers/httpExceptions.js')
const pageController = require('./controllers/pageController.js')

module.exports = http.createServer((req, res) => {
    const currentURL = new URL(`http://${environment.hostname}:${environment.port}${req.url}`);
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
                    const id = queryParams.get('id')
                    if (id && bookId) {
                        pageController.getPageById(req, res, id, bookId);
                    }
                    else if(bookId) {
                        bookController.getPagesByBookId(req, res, bookId);
                    } 
                    else {
                        exceptions.internalServerError(req, res);
                    }
                }

            }
        }
    }

    const executeHttpMethod = endpoints[currentURL.pathname];
    executeHttpMethod !== undefined ? executeHttpMethod()[req.method]() : exceptions.internalServerError(req, res);
});
