'use strict';

const express = require('express');
const logger = require('morgan');
const routes = require('./routes');

const app = express();

app.disable('x-powered-by');

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('hiii');
});

app.use((err, req, res, next) => {
  res.status(500);
});

module.exports = app;
