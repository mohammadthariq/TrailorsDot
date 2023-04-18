const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routeBanner = require("./src/routes/bannerRoutes");
const routeList = require("./src/routes/listRoutes");

//Mongodb connection
const uri = process.env.MONGOOSE_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Database Connected");
});

//Express
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json());

app.listen(5000, () => console.log(`Server is Running Successfully on 5000`));

app.use("/api", routeBanner, routeList);
