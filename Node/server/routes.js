const fs = require('fs');

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Form</title>')
		res.write(
			`<body>
				<form method="POST" action="/message">
					<input type="text" name="message"/>
					<button type="submit">Send</button>
				</form>
			</body>`
		);
		res.write('</html>');
		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			console.log('chunk--->', chunk);
			body.push(chunk);
			console.log('body---->', body);
		});

		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log('parsedBody--->', parsedBody);
			const message = parsedBody.split('=')[1].replace('+', ' ');
			fs.writeFile('message.txt', message, (err) => {
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});
		});
	}
	
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>Hiiiii</title>')
	res.write('<body><h1>Hello From Node </h1></body>');
	res.write('</html>');
	res.end();
}

module.exports = {
	handler: requestHandler,
	someText: 'Some text'
};