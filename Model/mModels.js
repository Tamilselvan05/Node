const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userEmail: { type: String },
  userName: { type: String },
});

module.exports = mongoose.model("user", userSchema, "user");
