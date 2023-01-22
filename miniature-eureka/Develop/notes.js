const fs = require('fs');
const path = require('path');
const {notes} = require('./db/db.json');

let noteArray = [];

const createNote = (note, noteArray) => {

    noteArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, notes),
        JSON.stringify({notes: noteArray}, null, 2)
    );
};


    // Filtering through the array to find a note by ID. Function used to delete notes.
const findID = (id, noteArray) => {

    const result = noteArray.filter(note => note.id === id)[0];
    return result;

}


const editNote = (editedNote, noteArray) => {

    const index = noteArray.findIndex(note => note.id === editedNote.id);

    noteArray.splice(index, 1);
    noteArray.splice(index, 0, editedNote);
    
    fs.writeFileSync(
        path.join(__dirname, notes),
        JSON.stringify({notes: notesArray}, null, 2)
    );
};


const removeNote = (note, noteArray) => {

    const index = noteArray.indexOf(note);
    noteArray.splice(index, 1);

    fs.writeFileSync(
        path.join(__dirname, notes),
        JSON.stringify({notes: noteArray}, null, 2)

    );
};

module.exports = {createNote, findID, editNote, removeNote};