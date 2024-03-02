import http from 'http';

const server = http.createServer((request, response) => {
	console.log('URL', request.url);
	console.log('Method', request.method);

	// Prepare response to request
	response.write('Ok e 3');

	// Send response to client
	response.end();
});

// Default hostname: localhost || 127.0.0.1
// Default port: 3000

server.listen(3000);
