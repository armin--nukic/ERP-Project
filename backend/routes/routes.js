// routes.js

const express = require("express");
const router = express.Router();
const Item = require("../models/Item."); // Pretpostavljajući da je model definiran u 'Item.js'

// GET ruta za dohvaćanje svih stavki
router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error("Failed to fetch items:", error);
    res.status(500).json({ message: "Failed to fetch items" });
  }
});

// POST ruta za stvaranje nove stavke
router.post("/items/new", async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description,
      // Dodaj ovdje ostala polja stavke ako ih ima
    });
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    console.error("Failed to add new item:", error);
    res.status(500).json({ message: "Failed to add new item" });
  }
});

router.delete("/items/delete/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    // Prvo provjeri postoji li stavka s odgovarajućim ID-om
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    // Ako postoji, obriši stavku iz baze
    await Item.findByIdAndDelete(itemId);
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Failed to delete item:", error);
    res.status(500).json({ message: "Failed to delete item" });
  }
});

module.exports = router;
