'use strict';

const server = require('./server.js')
const environment = require('./environment/environment.js')

const port = environment.port
const hostname = environment.hostname

const startServer = () => {

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}

startServer()

