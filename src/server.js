const bookController = require('./controllers/bookController.js')
const http = require('http');

module.exports = http.createServer((req, res) => {
    const currentURL = new URL(`http://localhost:8000${req.url}`);
    const endpoints = {
        '/api/books': () => {
            const httpMethods = {
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

            const getHttpMethod = httpMethods[req.method];
            getHttpMethod();
        },
        '/api/books/pages': () => {
            const httpMethods = {
                'GET': () => {

                }

            }

            const getHttpMethod = httpMethods[req.method];
            getHttpMethod();
        }
    }
    const executeHttpMethod = endpoints[currentURL.pathname];
    executeHttpMethod();
});
