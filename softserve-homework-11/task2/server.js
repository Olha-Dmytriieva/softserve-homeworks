const exported = require('./personalmodule');
// console.log(`exp:${exported.currentDate}`)

const http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(`Date of request: ${exported.currentDate},  
    ${exported.greet(exported.time)},
     ${exported.username}`);
     }).listen(8000);
     console.log('Server running at http://127.0.0.1:8000/');