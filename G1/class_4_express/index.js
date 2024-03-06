import express from 'express';
import path from 'path';
import router from './router.const.js';
import cors from 'cors';

const PORT = 3000;
const HOSTNAME = 'localhost';

// Creating the static page path
const staticPagePath = path.join(import.meta.dirname, 'public');

// Creating the express server
const app = express();

// For parsing the incoming request with JSON payload (body)
// Formerly known as body-parser
app.use(express.json());

// CORS
app.use(cors());

// This is a static page serving middleware, which serves the static pages from the given path
// In a nutshell, it serves the HTML, CSS, JS, images, etc.
app.use('/static-page', express.static(staticPagePath));

// This is the main router start-point. /api is commonly used for APIs
app.use('/api', router);

// Starting the express server
app.listen(PORT, HOSTNAME, () => {
	console.log(`Server started listening at http://${HOSTNAME}:${PORT}`);
});
