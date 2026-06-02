const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// conexão MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sistema_clientes"
});

// testar conexão
db.connect((err) => {
  if (err) {
    console.log("Erro ao conectar no MySQL");
    console.log(err);
    return;
  }

  console.log("MySQL conectado!");
});

// rota teste
app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});