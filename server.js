const express = require("express");
const cors = require("cors");
const port = 8010;

const connectDb = require("./config/index");

const restaurantRoute = require("./route/restaurant");
const MONGO_URL = "";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/restaurant", restaurantRoute);

connectDb(MONGO_URL);
app.listen(port, () => {
  console.log(`Server ${port} npaslaa`);
});
