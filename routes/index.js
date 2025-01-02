var express = require('express');
let db = require('../utils/db');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cafeteria' });
});

module.exports = router;
