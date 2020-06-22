// Core Modules 
// http: launch a server and sends request
// https: 
// fs
// path
// os
// lets begin ----------------> (Learning raw Logic) then will move to express

const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);
console.log(routes.someText);
server.listen(2222);

// Types of Errors
// Syntax Errors
// RunTime Errors
// Logical Errors