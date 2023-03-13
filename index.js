const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routeBanner = require("./src/routes/bannerRoutes");

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

// const Port = process.env.PORT || 8080;
app.listen(8080, () => console.log(`Server is Running Successfully on 8080`));

app.use("/api/banner", routeBanner);
