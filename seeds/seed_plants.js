'use strict';

const plantsList = require('../lib/seed-data-garden.json');

exports.seed = function(knex, Promise) {
  let count = 0;

  return knex('plants').del()
    .then(function () {
      return Promise.all(
        plantsList.map((plant) => {
          count++
          return knex('plants').insert( Object.assign({id: count} , plant) )
        })
      )
    });
};
