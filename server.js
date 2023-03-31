const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = 8010;

const connectDb = require("./config/index");

const restaurantRoute = require("./route/restaurant");
const dbUrl= process.env.MONGO_URL

const app = express();
app.use(cors());
app.use(express.json());

app.use("/restaurant", restaurantRoute);

connectDb(dbUrl);
app.listen(port, () => {
  console.log(`Server ${port} npaslaa`);
});
