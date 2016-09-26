'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

const sql = knex('plants').toString();

console.log(sql);

knex.destroy();
