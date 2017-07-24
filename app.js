const express = require('express');
const cors = require('cors');
const app = express();
const knex = require('./db/knex');
//the app.use(cors()) needs to be above routes
app.use(cors());

app.get('/', (request,response) => {
  knex('place').then((data) => {
    response.json(data);
  })
})

app.listen(8000);
