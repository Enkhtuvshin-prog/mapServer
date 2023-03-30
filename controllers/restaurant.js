// const Restaurant = require("../model/Restaurant");
const Restaurant = require("../Model/Restaurant");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({ success: true, restaurants });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ success: false, message: error });
  }
};

const createRestaurant = async (req, res) => {
  const { name, lon, lat } = req.body;

  try {
    const restaurant = await Restaurant.create({
      name,
      location: { coordinates: [lon, lat] },
    });
    res.status(200).json({ success: true, restaurant });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ success: false, message: error });
  }
};

module.exports = { getRestaurants, createRestaurant };
