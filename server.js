// Dependencies
// =============================================================
var express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

//MongoDB config
const db = process.env.MONGODB_URI;

//Connect to db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("react-folder/build"));
}

// Routes
// =============================================================
const userRoutes = require("./routes/api/user");
app.use("/api/user", userRoutes);
const animeRoutes = require("./routes/api/anime");
app.use("/api/anime", animeRoutes);
const mangaRoutes = require("./routes/api/manga");
app.use("/api/manga", mangaRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
