const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/.env" });
const { PORT, MONGO_URI } = process.env;

const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = MONGO_URI || "mongodb://localhost:27017/authappDB";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("Server is up and running");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/smoothies", (req, res) => res.render("smoothies"));
