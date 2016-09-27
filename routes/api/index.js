'use strict';

const express = require('express');
const router = express.Router();

const plants = require('./plants');

router.use('/plants', plants);

module.exports = router;
