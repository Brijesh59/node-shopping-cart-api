const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: { type: String, default: null },
  mobileNumber: { type: String, default: null },
  password: { type: String, default: null },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Users", User);
