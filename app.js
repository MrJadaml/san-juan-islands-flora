'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('hiii');
});

app.use((err, req, res, next) => {
  res.status(500);
});

module.exports = app;
