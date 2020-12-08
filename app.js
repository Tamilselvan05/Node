
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");



// const mModels = require("./Model/mModels");


const rRoute = require("./Routes/rRoute");

app.use(cors());
app.use(bodyParser.json());

app.use("/user", rRoute);



// database port save agurathu
const database =
  "mongodb+srv://codingspace:codingspacedev@cluster0.4yk93.mongodb.net/tamil";

// connecting mode
mongoose.connect(
  database,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err, succ) => {
    if (err) {
      console.log("Db not cconnected");
    } else {
      console.log("DB connected");
    }
  }
);

// server on mode
app.listen(3000, () => {
  console.log("connecting");
  
});
