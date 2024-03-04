import { Router } from 'express';

const router = Router();

// Get all students
router.get('/students', (req, res) => {
	console.log(req);

	const students = [
		{
			name: 'Dragan Draganovski',
			id: 123,
		},
	];

	res.send(students);
	// res.sendStatus(200);
});

export default router;
