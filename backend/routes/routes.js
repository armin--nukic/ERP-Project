const express = require("express");
const router = express.Router();

// Importirajte modele ili druge potrebne resurse
const Item = require("../models/Item");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = "your_jwt_secret";

// Rute za stavke (items)
router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error("Failed to fetch items:", error);
    res.status(500).json({ message: "Failed to fetch items" });
  }
});

router.post("/items/new", async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description,
      // Dodajte ovdje ostala polja stavke ako ih ima
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
    // Prvo provjerite postoji li stavka s odgovarajućim ID-om
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    // Ako postoji, obrišite stavku iz baze
    await Item.findByIdAndDelete(itemId);
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Failed to delete item:", error);
    res.status(500).json({ message: "Failed to delete item" });
  }
});

// Ruta za registraciju korisnika
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Provjera postoji li korisnik s istim emailom
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with that email already exists" });
    }

    // Hashiranje lozinke
    const hashedPassword = await bcrypt.hash(password, 10);

    // Stvaranje novog korisnika
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

// Ruta za prijavu korisnika
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Pronađite korisnika prema emailu
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Provjerite podudaranje lozinke
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in" });
  }
});

module.exports = router;
