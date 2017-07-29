const express = require('express');
const cors = require('cors');
const app = express();
const knex = require('./db/knex');
const bodyParser = require('body-parser')
//the app.use(cors()) needs to be above routes
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/places', (request,response) => {
  knex('place').then((data) => {
    response.json(data);
  });
});

function validPlace(data) {
  let validCity = typeof data.city === 'string' && data.city.trim() !== '' && isNaN(data.city);
  let validState = typeof data.state === 'string' && data.state.trim() !== '' && isNaN(data.state);
  let validRating = !isNaN(data.rating) && data.rating <= 10 && data.rating >= 1;
  return validCity && validState && validRating;
}

function validId(request, response, next) {
  let id = request.params.id;
  if(!isNaN(id)){
    return next();
  } else {
    response.json({message: 'Invalid ID parameter'})
  }
}

app.get('/places/:id', validId, (request,response) => {
  let id = request.params.id
  knex('place')
  .where('id',id).first()
  .then((data) => {
    response.json(data)
  });
});

app.post('/places', (request,response) => {
  let post = request.body;
  if (validPlace(post)) {
    knex('place').insert(post)
    .returning('*')
    .then(data => {
      response.json(data);
    });
  } else {
    response.json({message: 'Invalid input'})
  }
});

app.put('/places/:id', validId, (request,response) => {
  let id = request.params.id;
  let edit = request.body;
  if (validPlace(edit)) {
    knex('place').where('id',id)
    .update(edit)
    .returning('*')
    .then(edited => {
      response.json(edited);
    });
  } else {
    response.json({message: 'Invalid input'})
  }
});

app.delete('/places/:id', validId, (request,response) => {
  let id = request.params.id;
  knex('place')
  .where('id',id).del()
  .then(deleted => {
    response.json({
      message: 'Location deleted',
      deleted: deleted
    });
  });
});

app.listen(process.env.PORT || 8000);
