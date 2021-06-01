const { response } = require('express');
const express = require("express");
const path = require("path");

const port = 3000;

const app = express();  

let dados = require("./dados/produtos.json")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));
 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/html/index.html"));
});

app.get("/list-recipe", (req, res) => {
  //res.sendFile(path.join(__dirname, "./static/html/list-recipe.html"));
  res.render("list-recipe", { produtos : dados })
});

app.get("/show-recipe", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/html/show-recipe.html"));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
