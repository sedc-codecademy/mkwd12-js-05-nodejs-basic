import http from 'http';

const server = http.createServer((request, response) => {
	// console.log('URL', request.url);
	// console.log('Method', request.method);
	// // Prepare response to request
	// response.write('Ok e 3');
	// // Send response to client
	// response.end();

	const URL = request.url;

	// '/' is a default route
	if (URL === '/') {
		response.setHeader('Content-Type', 'text/html');
		response.write(`<h1>Welcome to our server</h1>`);
		response.end();
	}

	if (URL === '/something') {
		response.setHeader('Content-Type', 'text/html');
		response.write('<h1>This is the /something route</h1>');
		response.end();
	}

	if (URL === '/movies') {
		response.setHeader('Content-Type', 'text/html');
		response.write('<h1>We are at the /movies</h1>');

		const chunks = []; // we keep all chunks here, as they arrive

		// data event is executed when during a POST call data (body) is received
		request.on('data', chunk => {
			console.log(chunk);
			chunks.push(chunk); // add chunk to list of chunks
		});

		// "end" event is triggered when all data has been received
		request.on('end', () => {
			// we merge all chunks in a single string
			const parsedChunks = Buffer.concat(chunks).toString();

			console.log(parsedChunks);

			// "movieName=Titanic" movieName is the name of the input in HTML, Titanic is the value of the input
			// "Dumb+and+Dumber" spaces are replaced with pluses
			const movieName = parsedChunks.split('=')[1].replace('+', ' ');
			console.log(movieName);
		});

		response.end();
	}

	if (URL === '/add_movie') {
		response.setHeader('Content-Type', 'text/html');
		response.write(`
			<form action="/movies" method="POST">
				<input type="text" name="movieName" />
				<button type="submit">Add Movie</button>
			</form>
		`);
		response.end();
	}
});

// Default hostname: localhost || 127.0.0.1
// Default port: 3000

server.listen(3000);
