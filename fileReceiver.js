const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    request.pipe(
        fs.createWriteStream('./wavs' + request.url + Date.now(), {
            encoding: 'binary',
        })
    );
    response.end(`{path: "${request.url}", status: 100}`);
}).listen(3000, () => {
    console.log('File server started listening 3000');
});
