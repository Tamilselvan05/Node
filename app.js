const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cars = require("cars");

const database =
  "mongodb+srv://codingspace:codingspacedev@cluster0.4yk93.mongodb.net/tamil";

app.listen(3000, () => {
  console.log("connecting");
});
