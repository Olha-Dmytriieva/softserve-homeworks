

//*************************************task1******************************************************************* */
// const date = new Date();
// console.log(date)

// const http = require('http');

// http.createServer(function(request, response){
//   response.writeHead(200,{'Content-type': 'text/html'});
//   response.end()
// }).listen(5500)


// console.log('Server running at http://127.0.0.1:5500/');


//*************************************task2******************************************************************* */



const http = require('http');
const url = require('url');
const static = require('node-static');
const server = new static.Server('.');



function accept(req, res) {
if (req.url == '/books.json') {

  server.serve(req, res);		
} else {
  server.serve(req, res);
}
}
// ------ run server -------
http.createServer(accept).listen(8000)

console.log('http://127.0.0.1:8000/')