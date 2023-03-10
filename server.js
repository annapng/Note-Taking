const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./Develop/routes/APIroutes.js');
const htmlRoutes = require('./Develop/routes/HTMLroutes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('./Develop/public'));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
