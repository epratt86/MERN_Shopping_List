const express = require("express");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();

// Middleware
app.use(express.json());

// Use items Routes
app.use("/api/items", items);

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
