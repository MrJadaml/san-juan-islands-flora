'use strict';

const fs = require('fs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      fs.readFile('../lib/seed-data-garden.json', 'utf8', (err, plantsJSON) => {
        const plantsList = JSON.parse(plantsJSON);

        for (let plant in plantsList) {
          knex('plants').insert(plant)
        }
      });
    });
};
