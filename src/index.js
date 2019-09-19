const server = require("./server.js")

try {
    server.register()
}
catch (error) {
    console.log(error)
}