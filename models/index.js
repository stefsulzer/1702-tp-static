//  db schema and so forth

var Sequelize = require('Sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});
// postgres uses its own port, which is always 5432!!!!!
// Trip // Day

var Place = db.define('places', {
  address: {
    type: Sequelize.STRING,
  },

  city: {
    type: Sequelize.STRING,
  },

  state: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },

  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
  }
})

var Hotel = db.define('hotels', {
  name: {
    type: Sequelize.STRING,
  },

  num_stars: {
    type: Sequelize.FLOAT, // you can't put a range in parans on a float
  },
  amenities: {
    type: Sequelize.STRING, // not sure
  }
})

var Activity = db.define('activities', {
  name: {
    type: Sequelize.STRING,
  },

  age_range: {
    type: Sequelize.STRING,
  }
})

var Restaurant = db.define('restaurants', {
  name: {
    type: Sequelize.STRING,
  },

  cuisine: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  }
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant,
  db: db
};
