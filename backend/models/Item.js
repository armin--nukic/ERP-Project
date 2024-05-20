// backend/models/item.js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  // Dodaj više polja po potrebi
});

module.exports = mongoose.model("Item", itemSchema);
