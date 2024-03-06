import express from "express";
import {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../services/students.service.js";

const router = express.Router();

// CRUD = Create; Read; Update; Delete

// The main route - localhost:3000/api/students
//
// localhost:3000/api/students?gender=F - everything after the ? is called a query string and is always in format: key-value pair
// localhost:3000/api/students?country=France

// if more than one key-value pair, it is separated by "&" symbol
// localhost:3000/api/students?gender=F&country=France

// GET ALL STUDENTS
router.get("/students", (req, res) => {
  const queryData = req.query;
  try {
    const students = getStudents(queryData);
    res.send(students);
  } catch (error) {
    res.sendStatus(500);
  }
});

export { router };
