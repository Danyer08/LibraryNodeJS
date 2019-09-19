const manager = require('../managers/bookManager.js')

const httpActions = {
    getBooks: () => {
       return manager.getBooks()
    }
}

module.exports = httpActions

