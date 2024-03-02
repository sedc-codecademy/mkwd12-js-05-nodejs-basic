import { promises as fsPromises } from 'fs';

const writeNotesToFile = async (filePath, notesToWrite) => {
    const notesJson = JSON.stringify(notesToWrite);
    await fsPromises.writeFile(filePath, notesJson);
}

const readNotes = async (filePath) => {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const notes = JSON.parse(jsonData);
    return notes;
}

const readNoteById = async (filePath, noteId) => {
    const notes = await readNotes(filePath);
    const foundNote = notes.find(note => note.id === noteId);
    if (!foundNote) {
        // throw new Error('Note not found!'); // we don't need a return if we use "throw" syntax
        console.log('Note not found!');
        return;
    }
    return foundNote;
}

const createNote = async (filePath, newNote) => {
    const notes = await readNotes(filePath);
    const newNoteId = notes.length + 1;
    const noteToAdd = {id: newNoteId, ...newNote};
    notes.push(noteToAdd);
    await writeNotesToFile(filePath, notes);
}


const deleteNote = async (filePath, noteId) => {
    const notes = await readNotes(filePath);
    const noteToDelete = notes.find(note => note.id === noteId);
    if (!noteToDelete) {
        // throw new Error('Note not found!'); // we don't need a return if we use "throw" syntax
        console.log('Note not found!');
        return;
    }
    const updatedNotes = notes.filter(note => note.id !== noteId)
    await writeNotesToFile(filePath, updatedNotes);
}

const updateNote = async (filePath, updatedNote, noteId) => {
    const notes = await readNotes(filePath);
    const indexToUpdate = notes.findIndex(note => note.id === noteId);
    if (indexToUpdate === -1) { // if the data is not found, the foundIndex will always be -1
        // throw new Error('Note not found!');  // we don't need a return if we use "throw" syntax
        console.log("Note not found");
        return;
    }
    notes[indexToUpdate] = {id: noteId, ...updatedNote};
    await writeNotesToFile(filePath, notes);
}


export {
    readNotes,
    readNoteById,
    createNote,
    deleteNote,
    updateNote
}


