module.exports = {
    port: 8000,
    hostname: 'localhost',
    htmlTemplate: 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Library</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
        <body>
        <div class="col-xs-12 mt-5">
            <div class="row">
                <div class="container d-flex justify-content-center">
                    <div class="card">
                        <div class="card-header">
                            <h1>Page Number [PageNumber]</h1>
                        </div>
                        <div class="card-body">
                            <p>[Description]</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    </html>`
}