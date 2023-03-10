const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://shenbasv98:TrailorsDot@trailorsdot.5kfvhrr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

client.on("error", (err) => {
  console.log(err);
});
client.once("open", () => {
  console.log("success");
});

app.get("/", async (req, res) => {
  res.send("thariq");
});

// const Port = process.env.PORT || 8080;

app.listen(8080, () => console.log(`Server is Running Successfully on 8080`));
