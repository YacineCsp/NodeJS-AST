
    //const http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const content='<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '        <meta charset="utf-8" />' +
        '        <title>NodeJS-Zidi Yacine-Explains</title>' +
        '    </head>' + 
        '    <body>' +
        '<p>How Hello Works (travai de Zidi Yacine)</br></br></br>'+
        'Tout d\'abord, je suis parti du hello world basique.</br>'
        +
        'Puis, en suivant le cours j\'ai implenter url et query string afin de récupérer le path</br>'
        +
        'Il m\'a suffi ensuite de créer mes conditions afin d\'adapter l\'affichage en fonction du path récupéré.</br>'
        '    </body>' +
        '</html>';
        res.end(content);
    }).listen(8080);