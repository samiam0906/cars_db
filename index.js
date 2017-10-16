const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

const express = require('express');
const app = express();

app.listen(8000, function() {
  console.log("Listening on port 8000...");
})
