const express = require("express");
const path = require("path");

const port = 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "docs")));

const pratoDoDia = {
  nome: "Pão de Forma Caseiro",
  foto: "Pão-de-Forma-Caseiro.jpg"
}

app.get("/", (req, res) => {
  res.render("views/pages/home", { conteudo:  "index", prato: pratoDoDia });
});

const dados = require("./dados/pratos.json");


app.get("/list-recipe", (req, res) => {
  res.sendFile(path.join(__dirname, "./listRecipes/list-recipe.html"));
});

app.get("/show-recipe", (req, res) => {
  res.sendFile(path.join(__dirname, "./show-recipe/show-recipe.html"));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 
