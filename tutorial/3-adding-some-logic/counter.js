// Include http module.
var http = require('http'),
// And url module, which is very helpful in parsing request parameters
    url = require("url");
;

// Initialize the visitor count
var userCount = 0;

//Create the server
http.createServer(function (request, response) {
    // Log each new request to console
    console.log('New connection');
    // Increment the visitor count
    userCount++;
    // Output the response to the browser
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.end();
}).listen(8080);

console.log('Server started');
