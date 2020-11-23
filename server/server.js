const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3002;
const database = require('../database/mongoose/mongoose.js');
const controller = require('./controller.js');

const publicDirectory = path.join(__dirname, '../client/dist');

app.use(express.json());
app.use('/:id', express.static(publicDirectory));

app.get('/:id/reviews', controller.getOne);

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
