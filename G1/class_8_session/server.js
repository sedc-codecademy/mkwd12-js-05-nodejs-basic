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
