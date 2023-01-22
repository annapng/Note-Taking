const router = require('express').Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.resolve('C:/Users/proba/bootcamp/Note-Taker/miniature-eureka/Develop/public/index.html'));
  });
  
router.get('/notes.html', (req, res) => {
    res.sendFile(path.resolve('C:/Users/proba/bootcamp/Note-Taker/miniature-eureka/Develop/public/notes.html'));
  });



module.exports = router;
  