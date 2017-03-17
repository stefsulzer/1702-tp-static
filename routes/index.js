var Promise = require('bluebird');
var express = require('express');
var router = express.Router();
var data = require('../models');
var Hotel = data.Hotel;
var Restaurant = data.Restaurant;
var Activity = data.Activity;

router.get('/', function(req, res, next) {

  Promise.all([Hotel.findAll(), Restaurant.findAll(), Activity.findAll()])
    .spread(function(hotels, restaurants, activities) {
      res.render('home', {hotels: hotels, restaurants: restaurants, activities: activities});
    })
    .catch(next);
});


module.exports = router;
