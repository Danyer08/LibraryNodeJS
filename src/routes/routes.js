const controllers = require('../controllers/libraryController.js')

const getMethods = [
    {
        method: (req, res) => {
            const data = controllers.getBooks()
            
            res.json({
                status: 'API Its Working',
                message: 'Welcome to RESTHub crafted with love!',
                data: data
            })
        },
        url: "/api"
    },
    {
        method: (req, res) => {
            res.send('Hello World with Express Other')
        },
        url: "/api/other"
    }
]

module.exports.getMethods = getMethods;