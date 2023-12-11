const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose.js');

const passport = require('passport');
const passportJWT = require("./config/passport-jwt-strategy");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Server is running"));

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) return console.log("Error in running server ", err);

  console.log(`Server is running on http://localhost:${port}`);
});