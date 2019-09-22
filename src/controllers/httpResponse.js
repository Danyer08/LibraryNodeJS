module.exports = (res, status, body, contentType = 'application/json') => {
    res.statusCode = status;
    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(body);
    res.end();
}