import { Router } from 'express';
import fs, { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Path to the students.json file
// .. means go one level up (to the parent folder)
// we are in routes folder, so we need to go one level up to reach the data folder
const studentsPath = path.join(
	import.meta.dirname,
	'..',
	'data',
	'students.json'
);

// Creating a new router which will help us list all the needed routes for students
const router = Router();

// Get all students
router.get('/students', (req, res) => {
	// 1. Get students from the DB (json)
	const stringifiedStudents = fs.readFileSync(studentsPath);

	// 2. parse the students
	const students = JSON.parse(stringifiedStudents);

	// 3. Send the students to requester
	res.send(students);
});

// Get one student
router.get('/students/:id', (req, res) => {
	// 1. get the id (params is an object that contains all the parameters in the URL)
	const id = req.params.id;

	// 2. Get all the students
	const students = JSON.parse(fs.readFileSync(studentsPath));

	// 3. Find the student
	const student = students.find(s => s.id === id);

	// 4. Send back the student
	res.send(student);
});

// Create a new student
router.post('/students', (req, res) => {
	// 1. Get the student from the request body
	// req.body is the data that the user sent, already parsed by the body-parser middleware
	const student = req.body;

	// 2. Add an id to the student
	const newStudent = {
		...student,
		id: uuidv4(),
	};

	// 3. Get all the students
	const students = JSON.parse(fs.readFileSync(studentsPath));

	// 4. Add the new student to the students array
	students.push(newStudent);

	// 5. Save the students array to the DB (json file)
	const stringifiedStudents = JSON.stringify(students);

	// 6. Write the students to the file
	fs.writeFileSync(studentsPath, stringifiedStudents);

	// 7. Send the new student to the requester (client app) with a 201 status code
	res.status(201).send(newStudent);
});

// Update a student
router.put('/students/:id', (req, res) => {
	// 1. Get the id out of the request
	const id = req.params.id;

	// 2. Get the body out of the request
	const body = req.body;

	// 3. Get the students from the DB
	const students = JSON.parse(fs.readFileSync(studentsPath));

	// 4. Find the student
	const index = students.findIndex(s => s.id === id);

	// 5. Update the student
	students[index] = {
		// ...students[index], this belong to a PATCH method, it merges the old the the new student objects
		...body,
		id,
	};

	// 6. Save in database
	fs.writeFileSync(studentsPath, JSON.stringify(students));

	// 7. Return response to Client
	res.send(students[index]);
});

// Update a student group
router.patch('/students/:id/group', (req, res) => {
	// 1. Get the ID from the request
	const id = req.params.id;

	// 2. Get the body from the request
	const body = req.body;
	// {
	// 		group: "G1"
	// }

	// 3. Get the students from the DB
	const students = JSON.parse(fs.readFileSync(studentsPath));

	// 4. Find the student
	const index = students.findIndex(s => s.id === id);

	// 5. Update the student group
	students[index].group = body.group;

	// 6. Save students in DB
	fs.writeFileSync(studentsPath, JSON.stringify(students));

	// 7. Send updated student to client
	res.send(students[index]);
});

// Delete a student
router.delete('/students/:id', (req, res) => {
	// 1. Get the id from the request params
	const id = req.params.id;

	// 2. Get the students from the DB
	const students = JSON.parse(fs.readFileSync(studentsPath));

	// 3. Remove the student from the array
	const filteredStudents = students.filter(s => s.id !== id);

	// 4. Save the filtered students in the DB
	fs.writeFileSync(studentsPath, JSON.stringify(filteredStudents));

	// 5. Return response to client
	res.sendStatus(204);
});

export default router;
