require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(cors());

// Poveži se s bazom podataka
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true, // Iako je ovo deprecated, neće uzrokovati problem, ali se može izostaviti
    useUnifiedTopology: true, // Iako je ovo deprecated, neće uzrokovati problem, ali se može izostaviti
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

// Koristi rute
app.use("/", routes);

// Pokreni server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
