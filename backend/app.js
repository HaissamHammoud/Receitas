const http = require('http');
const path = require("path");
var express = require('express'); 
var app = express();
var fs = require('fs');

const hostname = '127.0.0.2';
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/docs"));

app.use(express.static(path.join(__dirname, "/docs")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"/docs/pages/home/index.html"))
});

app.get("/home/index.html", (req, res) => {
  res.sendFile(path.join(__dirname,"/docs/pages/home/index.html"))
});
app.get("/listRecipes/list-recipe.html", (req, res) => {
  res.sendFile(path.join(__dirname,"/docs/pages/listRecipes/list-recipe.html"))
});

app.get("/show-recipe/show-recipe.html", (req, res) => {
  res.sendFile(path.join(__dirname,"/docs/pages/show-recipe/show-recipe.html"))
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});