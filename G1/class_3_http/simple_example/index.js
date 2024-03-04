import http from 'http';

// Create a server
const server = http.createServer((request, response) => {
	// simple example of how to handle a request
	// console.log('URL', request.url);
	// console.log('Method', request.method);
	// // Prepare response to request
	// response.write('Ok e 3');
	// // Send response to client
	// response.end();

	// request.url is the URL of the request
	const URL = request.url;

	// '/' is a default route
	if (URL === '/') {
		// Set the header of the response to be HTML, so the browser knows how to interpret the response
		response.setHeader('Content-Type', 'text/html');
		// Write the response to the client (browser) - this is the body of the response
		response.write(`<h1>Welcome to our server</h1>`);
		// End the response - this is mandatory for the response to be sent to the client (browser) - if we don't end the response, the client will wait indefinitely for the response
		response.end();
	}

	// '/something' is a custom route we created
	if (URL === '/something') {
		// Set the header of the response to be HTML, so the browser knows how to interpret the response
		response.setHeader('Content-Type', 'text/html');
		// Write the response to the client (browser) - this is the body of the response
		response.write('<h1>This is the /something route</h1>');
		// End the response - this is mandatory for the response to be sent to the client (browser) - if we don't end the response, the client will wait indefinitely for the response
		response.end();
	}

	if (URL === '/movies') {
		// Set the header of the response to be HTML, so the browser knows how to interpret the response
		response.setHeader('Content-Type', 'text/html');
		// Write the response to the client (browser) - this is the body of the response
		response.write('<h1>We are at the /movies</h1>');

		const chunks = []; // we keep all chunks here, as they arrive

		// data event is executed when during a POST call data (body) is received from the client (browser) - this is the moment when we can start processing the data
		request.on('data', chunk => {
			// chunks are received in a buffer format (binary) - we need to convert them to string to be able to read them as text (utf-8)
			chunks.push(chunk); // add chunk to list of chunks received
		});

		// "end" event is triggered when all data has been received from the client (browser) - this is the moment when we can process the data
		request.on('end', () => {
			// we merge all chunks in a single string
			const parsedChunks = Buffer.concat(chunks).toString();

			// "movieName=Titanic" movieName is the name of the input in HTML, Titanic is the value of the input
			// "Dumb+and+Dumber" spaces are replaced with pluses
			const movieName = parsedChunks.split('=')[1].replace(/\+/g, ' '); // /\+/g is a regular expression that replaces all pluses with spaces
			console.log(movieName);
		});

		response.end();
	}

	if (URL === '/add_movie') {
		response.setHeader('Content-Type', 'text/html');
		// Write the response to the client (browser) - this is the body of the response, we create a form with a text input and a submit button to add a movie
		// action="/movies" method="POST" - when the form is submitted, the data is sent to the /movies route using the POST method
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
// server listens for requests on port 3000
server.listen(3000);
