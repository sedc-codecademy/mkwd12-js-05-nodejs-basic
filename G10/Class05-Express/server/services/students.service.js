import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

const currentFileURL = import.meta.url;
const currentFilePath = fileURLToPath(currentFileURL);
const projectPath = path.dirname(currentFilePath);

const studentsPath = path.join(projectPath, "..", "data", "students.json");

//1. Get students data
const getStudents = (queryData) => {
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

  if (updatedStudents.length <= 0) throw new Error("No students found");

  return updatedStudents;
};

//2. Save students date
const saveStudentData = (students) => {
  fs.writeFileSync(studentsPath, JSON.stringify(students, 0, 2));
};

//3.Add new student
const addStudent = (newStudentData) => {
  const students = getStudents();
  console.log("STUDENTS", students);
  const newStudent = {
    id: uuidv4(),

    // firstName:newStudentData.firstName,
    // lastName: newStudentData.lastName,
    // age: newStudentData.age,
    // gender: newStudentData.gender,
    // country: newStudentData.country,
    // email: newStudentData.email,
    // grade: newStudentData.grade

    ...newStudentData,
  };
  const updatedStudents = [...students, newStudent];

  // students.push(newStudent)

  saveStudentData(updatedStudents);
  return newStudent;
};

//4.Get student by id
const getStudentById = (studentId) => {
  const students = getStudents();

  const foundStudent = students.find((student) => student.id === studentId);

  if (!foundStudent) throw new Error("Student Not Found");

  return foundStudent;
};

//5.Update student info
const updateStudent = (studentId, studentUpdateData) => {
  if (studentUpdateData.id) throw new Error("Id can't be changed");

  const students = getStudents();
  const foundStudentIndex = students.findIndex(
    (student) => student.id === studentId
  );
  //If student index is not found
  if (foundStudentIndex < 0) throw new Error("Student not found");

  const updatedStudentData = {
    ...students[foundStudentIndex],
    ...studentUpdateData,
    // firstName: studentUpdateData.firstName,
    // lastName: studentUpdateData.lastName
  };

  students[foundStudentIndex] = updatedStudentData;

  saveStudentData(students);
  return updatedStudentData;
};

//6. Delete a student
const deleteStudent = (studentId) => {
  const students = getStudents();

  const updatedStudens = students.filter((student) => student.id !== studentId);

  if (students.length === updatedStudens.length) {
    throw new Error("Student to delete not found");
  }

  saveStudentData(updatedStudens);
};

export {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
