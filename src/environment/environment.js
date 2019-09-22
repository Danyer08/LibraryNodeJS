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
        <div class="d-flex body-content">
            <div class="col-xs-12 mt-5">
                <div class="row">
                    <div class="container d-flex justify-content-center">
                        <div class="card card-style">
                            <div class="card-header header-background">
                                <h1 class="text-center header-text-color">Page #[PageNumber]</h1>
                            </div>
                            <div class="card-body read-mode-background">
                                <p class="page-content">[Description]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .body-content {
                background-image: url("https://images6.alphacoders.com/346/346199.jpg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                height: 100vh;
                align-items: center;
                justify-content: center;    
            }
            .card-style {
                height: 80vh;
                max-width: 50vw;
                background: #973609;
            }
            .read-mode-background {
                background: #F5D8B7;
                overflow-y: scroll;
            }
            .header-background {
                background: #391C11;
            }
            .header-text-color {
                color: #F5D8B7;
            }
            .page-content {
                font-size: 22px;
                font-family: cursive;
            }
            ::-webkit-scrollbar {
                width: 7px;
            }
            ::-webkit-scrollbar-track {
            background: #F5D8B7;
            }
            ::-webkit-scrollbar-thumb {
            background: #973609;
            }
            ::-webkit-scrollbar-thumb:hover {
            background: #391C11;
            }
        </style>
        </body>
    </html>`
}