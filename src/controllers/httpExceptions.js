module.exports = {
    badRequest: (res, body) => {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(`Bad Request: ${body}`))
    },
    internalServerError: (req, res, error) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            statusCode: 500,
            message: `${error}`
        }))
    }
}