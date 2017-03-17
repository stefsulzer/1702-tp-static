//  db schema and so forth

var Sequelize = require('Sequelize');
var db = new Sequelize('postgres://localhost:3000/tripplanner', {logging: false});

// Trip // Day

var Trip = db.define(trips, {


}),
