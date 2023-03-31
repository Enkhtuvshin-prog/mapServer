const mongoose = require("mongoose");

const connectDb = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl);
    console.log("MONGO DB holbogdloo");
  } catch (err) {
    console.log("ERR", err);
  }
};
module.exports = connectDb;
