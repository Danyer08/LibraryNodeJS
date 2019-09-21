module.exports = {
    badRequest: (res, body) => {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(`Bad Request: ${body}`))
    },
    internalServerError: (req, res) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            statusCode: 500,
            message: `Failed to proxy the request to ${req.url}, because the request to the proxy target failed.Check that the proxy target server is running and accepting requests to ${req.url}`
        }))
    }
}