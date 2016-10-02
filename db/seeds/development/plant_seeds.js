'use strict';

const plantsList = require('../../../lib/seed-data-garden.json');

exports.seed = (knex, Promise) => {
  let count = 0;

  return knex('plants').del()
    .then(() => {
      return Promise.all(
        plantsList.map((plant) => {
          count++;

          return knex('plants').insert(Object.assign({ id: count }, plant));
        })
      );
    });
};
