
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "place"; ALTER SEQUENCE place_id_seq RESTART WITH 6;')
  .then(function(){
    var place = [{
      id: 1,
      city: 'New Orleans',
      state: 'Louisiana',
      rating: 1
    }, {
      id: 2,
      city: 'Savannah',
      state: 'Georgia',
      rating: 2
    }, {
      id: 3,
      city: 'San Antonio',
      state: 'Texas',
      rating: 3
    }, {
      id: 4,
      city: 'Anchorage',
      state: 'Alaska',
      rating: 4
    }, {
      id: 5,
      city: 'San Francisco',
      state: 'California',
      rating: 5
    }];
  return knex('place').insert(place);
  });
};
