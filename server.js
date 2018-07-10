const express = require("express");
const app = express();
// database
const Pokemon = require("./models/pokemon")


// index route
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  });
});

// show route
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: Pokemon[req.params.id]
  });
});












app.listen(3000, () => {
  console.log("I am listening on port 3000");
})