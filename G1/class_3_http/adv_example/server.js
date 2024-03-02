import http from 'http';
// using" as" to rename the import to "uuidv4"
import { v4 as uuidv4 } from 'uuid';
// import the readData and writeData functions from the text-service.js file
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
			// Set the response header to be of type JSON
			res.setHeader('Content-Type', 'text/json');
			// Get the data from the file db.json
			const responseBody = readData();
			// send the reviews as a response to the client (browser)
			res.write(responseBody);
			// send the response
			res.end();
		}

		// Creating
		if (METHOD === 'POST') {
			// body is an array that will hold the chunks of data that we receive
			const body = [];

			// req.on('data', callback) is an event listener that listens for the 'data' event
			// when the event is triggered, the callback function is executed
			// the callback function receives a chunk of data as an argument
			// the chunk of data is a buffer
			// a buffer is a special type of array that holds binary data
			// we need to convert the buffer to a string
			// we can use the Buffer.concat() method to concatenate the chunks of data
			// we can then use the toString() method to convert the concatenated buffer to a string
			req.on('data', chunk => {
				// push the chunks of data to the body array
				body.push(chunk);
			});

			// req.on('end', callback) is an event listener that listens for the 'end' event
			// when the event is triggered, the callback function is executed
			// the callback function does not receive any arguments
			// it is executed when all the data has been received
			req.on('end', () => {
				// concatenate the chunks of data
				const stringifiedBody = Buffer.concat(body).toString();
				// parse the stringified body to a JSON object (we know that we are receiving JSON data from the client in the body of the request)
				let review = JSON.parse(stringifiedBody);

				// add an id to the review object
				let newReview = {
					...review, // spread the properties of the review object
					id: uuidv4(), // add the id property to the object
				};

				// get the reviews from the db.json file, reviews are stored as an array of objects but they are stringified as JSON, so we need to parse them
				let reviews = JSON.parse(readData());
				// add the newReview to the reviews array
				reviews.push(newReview);

				// convert the reviews array to a JSON string, we need to do this because we can only send strings as a response and we keep the reviews as an array of objects that is stringified as JSON
				const reviewsJson = JSON.stringify(reviews);
				// add the reviews to the db.json file
				writeData(reviewsJson);
				// send the reviews as a response to the client (browser)
				res.write(reviewsJson);
				// send the response
				res.end();
			});
		}

		// Updating
		if (METHOD === 'PUT') {
			// URL called looks like this: /reviews/909633ae-a79f-40c7-8934-fa1f79fdc612

			// Split the URL by the '/' character
			const urlArr = URL.split('/');
			// Get the last element of the array which is the review id
			const reviewId = urlArr[urlArr.length - 1];
			// body is an array that will hold the chunks of data that we receive
			const body = [];

			// req.on('data', callback) is an event listener that listens for the 'data' event
			req.on('data', chunk => {
				// push the chunks of data to the body array
				body.push(chunk);
			});

			// req.on('end', callback) is an event listener that listens for the 'end' event
			req.on('end', () => {
				// concatenate the chunks of data and convert the buffer to a string
				const stringifiedBody = Buffer.concat(body).toString();
				// parse the stringified body to a JS object
				const parsedBody = JSON.parse(stringifiedBody);
				// get the reviews from the db.json file and parse them
				const reviews = JSON.parse(readData());

				// find the index of the review with the id that matches the reviewId
				const index = reviews.findIndex(r => r.id === reviewId);
				// update the review with the id that matches the reviewId
				reviews[index] = {
					...parsedBody,
					id: reviewId,
				};
				// convert the reviews array to a JSON string
				const stringifiedReviews = JSON.stringify(reviews);
				// add the reviews to the db.json file
				writeData(stringifiedReviews);
				// send the reviews as a response to the client (browser)
				res.write(stringifiedReviews);
				// send the response
				res.end();
			});
		}

		// 	Deleting
		// To be implemented
	}
});

server.listen(PORT, HOSTNAME, () => {
	console.log(
		`Server has started, and it is listening on http://${HOSTNAME}:${PORT}`
	);
});
