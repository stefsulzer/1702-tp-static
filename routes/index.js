var Promise = require('bluebird');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('hi');
});


module.exports = router;
