import express from 'express';
import path from 'path';
import studentRoutes from './routes/student.route.js';

const PORT = 3000;
const HOSTNAME = 'localhost';

// Creating the static page path
const staticPagePath = path.join(import.meta.dirname, 'public');

// Creating the express server
const app = express();

app.use(express.json());

// This is a static page
app.use('/static-page', express.static(staticPagePath));

// This is the main router start-point. /api is commonly used for APIs
app.use('/api', studentRoutes);

// Starting the express server
app.listen(PORT, HOSTNAME, () => {
	console.log(`Server started listening at http://${HOSTNAME}:${PORT}`);
});
