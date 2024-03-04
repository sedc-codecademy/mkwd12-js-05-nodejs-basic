import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { v4 as uuidv4 } from 'uuid';

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
	// 1. get the id
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
	const student = req.body;

	const newStudent = {
		...student,
		id: uuidv4(),
	};

	const students = JSON.parse(fs.readFileSync(studentsPath));

	students.push(newStudent);

	const stringifiedStudents = JSON.stringify(students);

	fs.writeFileSync(studentsPath, stringifiedStudents);

	res.status(201).send(newStudent);
});

// Update a student

// Update a student status

// Delete a student

export default router;
