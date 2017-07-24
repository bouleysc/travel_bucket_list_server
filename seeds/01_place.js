
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "place"; ALTER SEQUENCE place_id_seq RESTART WITH 16;')
  .then(function(){
    var place = [{
      id: 1,
      city: 'New Orleans',
      state: 'Louisiana',
      days_desired: null
    }, {
      id: 2,
      city: 'Savannah',
      state: 'Georgia',
      days_desired: null
    }, {
      id: 3,
      city: 'San Antonio',
      state: 'Texas',
      days_desired: null
    }, {
      id: 4,
      city: 'Anchorage',
      state: 'Alaska',
      days_desired: null
    }, {
      id: 5,
      city: 'San Francisco',
      state: 'California',
      days_desired: null
    }, {
      id: 6,
      city: 'Seattle',
      state: 'Washington',
      days_desired: null
    }, {
      id: 7,
      city: 'Nashville',
      state: 'Tennessee',
      days_desired: null
    }, {
      id: 8,
      city: 'Chicago',
      state: 'Illinois',
      days_desired: null
    }, {
      id: 9,
      city: 'Miami',
      state: 'Florida',
      days_desired: null
    }, {
      id: 10,
      city: 'New York City',
      state: 'New York',
      days_desired: null
    }, {
      id: 11,
      city: 'Newport',
      state: 'Rhode Island',
      days_desired: null
    }, {
      id: 12,
      city: 'San Diego',
      state: 'California',
      days_desired: null
    }, {
      id: 13,
      city: 'Portland',
      state: 'Oregon',
      days_desired: null
    }, {
      id: 14,
      city: 'Honolulu',
      state: 'Hawaii',
      days_desired: null
    }, {
      id: 15,
      city: 'Las Vegas',
      state: 'Nevada',
      days_desired: null
    }];
  return knex('place').insert(place);
  });
};
