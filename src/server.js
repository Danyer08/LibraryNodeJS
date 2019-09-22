const http = require('http');
const environment = require('./environment/environment.js');
const bookController = require('./controllers/bookController.js');
const exceptions = require('./controllers/httpExceptions.js');
const pageController = require('./controllers/pageController.js');

module.exports = http.createServer((req, res) => {
    const currentURL = new URL(`http://${environment.hostname}:${environment.port}${req.url}`);
    const endpoints = {
        '/api/books': () => {
            return {
                'GET': () => {
                    try {
                        const queryParams = currentURL.searchParams;
                        const id = queryParams.get('id')
                        if (id) {
                            bookController.getBookById(req, res, id);
                        }
                        else {
                            bookController.getBooks(req, res);
                        }
                    }
                    catch (error) {
                        exceptions.internalServerError(req, res, error);
                    }
                }
            }
        },
        '/api/books/pages': () => {
            return {
                'GET': () => {
                    try {
                        const queryParams = currentURL.searchParams;

                        const bookId = queryParams.get('bookId');
                        const pageNumber = queryParams.get('number');
                        const isHTML = queryParams.get('isHTML');

                        if (pageNumber && bookId) {
                            pageController.getPageByNumber(req, res, pageNumber, bookId, isHTML);
                        }
                        else {
                            pageController.getPagesByBookId(req, res, bookId);
                        }
                    }
                    catch (error) {
                        exceptions.internalServerError(req, res, error);
                    }
                }
            }
        }
    }

    const executeHttpMethod = endpoints[currentURL.pathname];
    const error = `There was not endpoint listening at ${currentURL}`;
    executeHttpMethod !== undefined ? executeHttpMethod()[req.method]() : exceptions.internalServerError(req, res, error);
});
