const mongoose = require("mongoose");

const connectDb = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("MONGO DB holbogdloo");
  } catch (err) {
    console.log("ERR", err);
  }
};
module.exports = connectDb;
