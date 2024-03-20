import express from 'express';
import router from './consts/router.const.js';
import cors from 'cors';

// Initialize express
const app = express();

const PORT = 3000;
const HOSTNAME = 'localhost';

// Middlewares
app.use(express.json());
app.use(cors());
// This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));
// We set view engine to ejs so that we can render ejs files in the views folder
app.set('view engine', 'ejs');

// This is a very basic middleware that logs the request method, url and the current date so that we can see the requests in the terminal
app.use((req, res, next) => {
	console.log(
		`Made API call to ${req.method}: ${req.url} on ${new Date().toISOString()}`
	);
	next();
});

// Routes
app.use('/api', router);

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
