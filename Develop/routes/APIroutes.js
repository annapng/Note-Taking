const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const notes = require('../db/db.json');
const {createNote, findID, editNote, removeNote} = require('../notes.js');

uuidv4();

router.get('/notes', (req, res) => {

    return res.json(notes);

});

router.post('/notes', (req, res) => {
    
    if(!req.body.id) {
        req.body.id = uuidv4();
        createNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }

    res.json(req.body);

});


router.delete('/notes/:id', (req, res) => {

    const note = findID(req.params.id, notes);

    removeNote(note, notes);
    res.json();

});



module.exports = router;