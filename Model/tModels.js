const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  useremail: { type: String },
  username: { type: String },
});

module.exports = mongoose.model("user", userSchema, "user");
