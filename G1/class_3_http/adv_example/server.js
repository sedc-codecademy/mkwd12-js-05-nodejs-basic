import http from 'http';
import { v4 as uuidv4 } from 'uuid';
import { readData, writeData } from './text-service.js';

const PORT = 3000;
const HOSTNAME = 'localhost';

// req = request
// res = response
const server = http.createServer((req, res) => {
	const URL = req.url;
	const METHOD = req.method;

	console.log(`URL: ${URL} | Method: ${METHOD}`);

	if (URL.startsWith('/reviews')) {
		// Selecting - fetching
		if (METHOD === 'GET') {
			res.setHeader('Content-Type', 'text/json');
			const responseBody = readData();
			res.write(responseBody);
			res.end();
		}

		// Creating
		if (METHOD === 'POST') {
			const body = [];

			req.on('data', chunk => {
				body.push(chunk);
			});

			req.on('end', () => {
				const stringifiedBody = Buffer.concat(body).toString();
				let review = JSON.parse(stringifiedBody);

				let updatedReview = {
					...review,
					id: uuidv4(),
				};

				let reviews = JSON.parse(readData());
				reviews.push(updatedReview);

				const reviewsJson = JSON.stringify(reviews);
				writeData(reviewsJson);
				res.write(reviewsJson);
				res.end();
			});

			res.end();
		}

		// Updating
		if (METHOD === 'PUT') {
			// /reviews/909633ae-a79f-40c7-8934-fa1f79fdc612
			const urlArr = URL.split('/');
			const reviewId = urlArr[urlArr.length - 1];
			const body = [];

			req.on('data', chunk => {
				body.push(chunk);
			});

			req.on('end', () => {
				const stringifiedBody = Buffer.concat(body).toString();
				const parsedBody = JSON.parse(stringifiedBody);
				const reviews = JSON.parse(readData());

				const index = reviews.findIndex(r => r.id === reviewId);
				reviews[index] = {
					...parsedBody,
					id: reviewId,
				};
				const stringifiedReviews = JSON.stringify(reviews);
				writeData(stringifiedReviews);
				res.write(stringifiedReviews);
				res.end();
			});
		}
	}
});

server.listen(PORT, HOSTNAME, () => {
	console.log(
		`Server has started, and it is listening on http://${HOSTNAME}:${PORT}`
	);
});
