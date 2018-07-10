const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon")


app.get("/pokemon", (req, res) => {
  res.send(Pokemon)
});

















app.listen(3000, () => {
  console.log("I am listening on port 3000");
})