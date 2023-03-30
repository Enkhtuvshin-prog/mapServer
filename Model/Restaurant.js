const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
  },
});

const restaurant = mongoose.model("Restaurant", RestaurantSchema);

restaurant.collection.createIndex({ location: "2dsphere" });
module.exports = restaurant;
