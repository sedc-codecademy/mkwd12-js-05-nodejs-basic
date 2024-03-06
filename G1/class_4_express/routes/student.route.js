import { Router } from 'express';
import { readData, writeData } from '../services/db.service.js';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import logger from '../services/logger.service.js';

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
router.get('', (req, res) => {
	const students = readData(studentsPath);

	logger.emit('log', `GET all students evoked`);

	res.send(students);
});

// Get one student
// localhost:3000/api/students/:id
router.get('/:id', (req, res) => {
	// 1. get the id (params is an object that contains all the parameters in the URL)
	const id = req.params.id;

	logger.emit('log', `GET student by id: ${id}`);

	// 2. Get all the students
	const students = readData(studentsPath);

	// 3. Find the student
	const student = students.find(s => s.id === id);

	// 4. Send back the student
	res.send(student);
});

// Create a new student
router.post('', (req, res) => {
	// 1. Get the student from the request body
	// req.body is the data that the user sent, already parsed by the body-parser middleware
	const student = req.body;

	logger.emit('log', `Student created with BODY ${student}`);

	// 2. Add an id to the student
	const newStudent = {
		...student,
		id: uuidv4(),
	};

	// 3. Get all the students
	const students = readData(studentsPath);

	// 4. Add the new student to the students array
	students.push(newStudent);

	writeData(studentsPath, students);

	// 7. Send the new student to the requester (client app) with a 201 status code
	res.status(201).send(newStudent);
});

// Update a student
router.put('/:id', (req, res) => {
	// 1. Get the id out of the request
	const id = req.params.id;

	// 2. Get the body out of the request
	const body = req.body;

	logger.emit('log', `UPDATE student with ID ${id}`);

	// 3. Get the students from the DB
	const students = readData(studentsPath);

	// 4. Find the student
	const index = students.findIndex(s => s.id === id);

	// 5. Update the student
	students[index] = {
		// ...students[index], this belong to a PATCH method, it merges the old the the new student objects
		...body,
		id,
	};

	// 6. Save in database
	writeData(studentsPath, students);

	// 7. Return response to Client
	res.send(students[index]);
});

// Update a student group
router.patch('/:id/group', (req, res) => {
	// 1. Get the ID from the request
	const id = req.params.id;

	logger.emit('log', `UPDATE student group with ID ${id}`);

	// 2. Get the body from the request
	const body = req.body;
	// {
	// 		group: "G1"
	// }

	// 3. Get the students from the DB
	const students = readData(studentsPath);

	// 4. Find the student
	const index = students.findIndex(s => s.id === id);

	// 5. Update the student group
	students[index].group = body.group;

	// 6. Save students in DB
	writeData(studentsPath, students);

	// 7. Send updated student to client
	res.send(students[index]);
});

// Delete a student
router.delete('/:id', (req, res) => {
	// 1. Get the id from the request params
	const id = req.params.id;

	logger.emit('log', `DELETE student with ID ${id}`);

	// 2. Get the students from the DB
	const students = readData(studentsPath);

	// 3. Remove the student from the array
	const filteredStudents = students.filter(s => s.id !== id);

	// 4. Save the filtered students in the DB
	writeData(studentsPath, filteredStudents);

	// 5. Return response to client
	res.sendStatus(204);
});

export default router;
