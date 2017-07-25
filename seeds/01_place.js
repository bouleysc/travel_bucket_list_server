
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "place"; ALTER SEQUENCE place_id_seq RESTART WITH 6;')
  .then(function(){
    var place = [{
      id: 1,
      city: 'New Orleans',
      state: 'Louisiana',
      rating: null
    }, {
      id: 2,
      city: 'Savannah',
      state: 'Georgia',
      rating: null
    }, {
      id: 3,
      city: 'San Antonio',
      state: 'Texas',
      rating: null
    }, {
      id: 4,
      city: 'Anchorage',
      state: 'Alaska',
      rating: null
    }, {
      id: 5,
      city: 'San Francisco',
      state: 'California',
      rating: null
    }];
  return knex('place').insert(place);
  });
};
