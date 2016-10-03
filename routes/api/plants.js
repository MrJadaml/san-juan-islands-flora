'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');

router.get('/', (req, res) => {
  knex('plants').then((data) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json(data);
  });
});

router.get('/:id', (req, res) => {
  knex('plants').where({ id: req.params.id }).first().then((plant) => {
    res.json(plant);
  });
});

router.post('/', (req, res) => {
  res.sendStatus(405);
});

router.put('/:id', (req, res) => {
  res.sendStatus(405);
});

router.delete('/:id', (req, res) => {
  res.sendStatus(405);
});

module.exports = router;
