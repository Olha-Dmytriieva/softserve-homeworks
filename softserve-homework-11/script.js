//tas1


const http = require("http");
const path = require('path');
const os = require('os'); 

const fileName = path.basename('C:\\Users\\User1\\Desktop\\softserve-homework\\softserve-homework-11\\script.js')
const directoryPath = path.dirname('C:\\Users\\User1\\Desktop\\softserve-homework\\softserve-homework-11\\script.js')
const windorVersion = os.version();
const timeOfPCOn = os.uptime();
const username = Object.values(os.userInfo());   


http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end(`System current username: ${(username)[2]},  
OS Type: ${windorVersion},
Current system worktime: ${(timeOfPCOn)}, 
Current work directory: ${directoryPath}
Server filename: ${fileName}, `);
 }).listen(8000);
 console.log('Server running at http://127.0.0.1:8000/');