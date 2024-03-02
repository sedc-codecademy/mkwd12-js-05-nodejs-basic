import path from 'path';
import { fileURLToPath } from 'url';
import {
    readNotes,
    readNoteById,
    createNote,
    deleteNote,
    updateNote
} from './notesService.js';

const notesFilePath = '.\\data\\notes.json'; // must use escape character

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);
console.log('PROJECT PATH', projectPath);
const notesPath = path.join(projectPath, 'data', 'notes.json');
// const notesPath = path.join(projectPath, notesFilePath);
console.log('NOTES PATH',notesPath);

const noteToAdd = {
    title: "Coding Notes",
    content: "Learn Nodejs and filesystem",
    timestamp: "2024-03-01T10:30:00Z"
};

const noteToUpdate = {
    title: "Exercise Routine",
    content: "60 minutes of jogging, 40 minutes of strength training.",
    timestamp: "2024-03-02T18:00:00Z"
}

// const note = await readNoteById(notesPath, 3);
// console.log(note);

// const notes = await readNotes(notesPath);
// console.log(notes);

// await createNote(notesPath, noteToAdd);

// await updateNote(notesPath, noteToUpdate, 4);

// await deleteNote(notesPath, 10);

const notes = await readNotes(notesPath);
console.log(notes);
