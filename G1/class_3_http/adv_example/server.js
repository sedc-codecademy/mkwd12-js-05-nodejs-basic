import http from 'http';

const PORT = 3000;
const HOSTNAME = 'localhost';

// req = request
// res = response
const server = http.createServer((req, res) => {});

server.listen(PORT, HOSTNAME, () => {
	console.log(
		`Server has started, and it is listening on http://${HOSTNAME}:${PORT}`
	);
});
