const mongoose = require("mongoose");

const Cart = new mongoose.Schema({});

module.exports = mongoose.model("Cart", Cart);
