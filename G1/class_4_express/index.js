import express from 'express';
import path from 'path';
import studentRoutes from './routes/student.route.js';

const PORT = 3000;
const HOSTNAME = 'localhost';

const staticPagePath = path.join(import.meta.dirname, 'public');

const app = express();

app.use('/static-page', express.static(staticPagePath));

app.use('/api', studentRoutes);

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server started listening at http://${HOSTNAME}:${PORT}`);
});
