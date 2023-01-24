const router = require('express').Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.resolve('./Develop/public/index.html'));
  });
  
router.get('/notes', (req, res) => {
    res.sendFile(path.resolve('./Develop/public/notes.html'));
  });

module.exports = router;
  