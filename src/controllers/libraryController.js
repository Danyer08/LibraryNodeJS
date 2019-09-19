const sequelize = require('sequelize')

const endpoints = {
    getBooks: () => {
        return [
            {
                id: 1, title: "Narnia", author: "Jon Gondonia"
            },
            {
                id: 2, title: 'AWS for Dummies', author: 'Olivo'
            },
            {
                id: 3, title: 'Admin', author: 'Admin'
            }
        ]
    },
    createBook: () => {
        console.log('Book created')
    }
}

module.exports = endpoints

