'use strict';

exports.seed = (knex, Promise) => {
  return knex('plants').del()
    .then(() => {
      return Promise.all([
        knex('plants').insert({ sci_name: 'Vitis vinifera', common_name: 'Wine grape', family_name: 'Vitaceae', is_native: true }),
        knex('plants').insert({ sci_name: 'Wolffia borealis', common_name: 'Northern water-meal', family_name: 'Lemnaceae', is_native: false }),
        knex('plants').insert({ sci_name: 'Zostera marina', common_name: 'Wide-blade eelgrass', family_name: 'Zosteraceae', is_native: false })
      ]);
    });
};
