const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const database = require('../database/mongoose/mongoose.js');
const controller = require('./controller.js');

const publicDirectory = path.join(__dirname, '../client/dist');

app.use(express.json());
app.use(express.static(publicDirectory));

app.get('/reviews', controller.getAll);
app.get('/reviews/:id', controller.getOne);

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});