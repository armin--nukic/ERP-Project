const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  //createdAt: { type: Date, default: Date.now }, // Dodajte createdAt polje
});

module.exports = mongoose.model("Item", itemSchema);
