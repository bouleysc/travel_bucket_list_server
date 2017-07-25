const express = require('express');
const cors = require('cors');
const app = express();
const knex = require('./db/knex');
//the app.use(cors()) needs to be above routes
app.use(cors());

app.get('/places', (request,response) => {
  knex('place').then((data) => {
    response.json(data);
  });
});

app.get('/places/:id', (request,response) => {
  let id = request.params.id
  knex('place')
  .where('id',id).first()
  .then((data) => {
    response.json(data)
  });
});

app.listen(process.env.PORT || 8000);
