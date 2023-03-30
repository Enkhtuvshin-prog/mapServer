const { Router } = require("express");
const {
  getRestaurants,
  createRestaurant,
} = require("../controllers/restaurant");

const router = Router();

router.route("/").get(getRestaurants).post(createRestaurant);

module.exports = router;
