const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log(`In the Middleware`);
	next(); // allow the request to continue to the next middleware
});

app.use((req, res, next) => {
	console.log(`In other Middleware`);
	res.send('<h1>Hello from Express</h1>'); // allows us to send a response
});

const server = http.createServer(app);
server.listen(2222);