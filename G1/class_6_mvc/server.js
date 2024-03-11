import express from 'express';
import router from './consts/router.const.js';
import cors from 'cors';

const app = express();

const PORT = 3000;
const HOSTNAME = 'localhost';

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', router);

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
