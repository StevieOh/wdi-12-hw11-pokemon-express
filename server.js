const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon")

app.get("/pokemon", (req, res) => {
  res.render("index.ejs",{
    pokemon: Pokemon
  })
})

app.get("/pokemon", (req, res) => {
  res.send(Pokemon)
});


app.get("/pokemon/:id", (req, res) => {
  res.send(req.params.id);
})

app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    pokemon: Pokemon[res.param.index]
  })
})














app.listen(3000, () => {
  console.log("I am listening on port 3000");
})