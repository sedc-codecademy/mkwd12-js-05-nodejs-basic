import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

const currentFileURL = import.meta.url;
const currentFilePath = fileURLToPath(currentFileURL);
const projectPath = path.dirname(currentFilePath);

const studentsPath = path.join(projectPath, "..", "data", "students.json");

const saveStudentData = (students) => {
  fs.writeFileSync(studentsPath, JSON.stringify(students));
};

// Get students data
const getStudents = (queryData) => {
  // expect gender and country
  const students = JSON.parse(
    fs.readFileSync(studentsPath, { encoding: "utf-8" })
  );

  let updatedStudents = [...students];
  if (queryData?.gender) {
    updatedStudents = updatedStudents.filter(
      (student) => student.gender === queryData.gender
    );
  }

  if (queryData?.country) {
    updatedStudents = updatedStudents.filter(
      (student) => student.country === queryData.country
    );
  }

  if (updatedStudents.length < 0) {
    throw new Error("No students found");
  }
  return updatedStudents;
};

const addStudent = (newStudentData) => {
  const students = getStudents();
  const newStudent = {
    id: uuidv4(),
    ...newStudentData,
  };
  const updatedStudents = [...students, newStudent];

  saveStudentData(updatedStudents);
  return newStudent;
};

const getStudentById = (studentId) => {
  const students = getStudents();

  const foundStudent = students.find((student) => student.id === studentId);
  if (!foundStudent) {
    throw new Error("Student not found");
  }

  return foundStudent;
};

const updateStudent = (studentId, studentUpdateData) => {
  if (studentUpdateData.id) {
    throw new Error("Id cannot be updated");
  }

  const students = getStudents();
  const foundStudent = students.find((student) => student.id === studentId);

  if (!foundStudent) {
    throw new Error("Student not found");
  }

  const foundStudentIdex = students.findIndex(
    (student) => student.id === studentId
  );

  const updatedStudentData = {
    ...students[foundStudentIdex],
    ...studentUpdateData,
  };

  students[foundStudentIdex] = updatedStudentData;
  saveStudentData(students);
  return updatedStudentData;
};

const deleteStudent = (studentId) => {
  const students = getStudents();

  const updatedStudentsData = students.filter(
    (student) => student.id !== studentId
  );

  saveStudentData(updatedStudentsData);
};

export {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
