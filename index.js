const express = require('express')
const app = express()

// Rota
// Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
//GET - Pega um info
//POST - Cria uma info
//PUT - Altera toda a info
//PATH - Altera parte da info
//DELETE - Apaga a Info
// Name - Um indentificador da rota
//Function (Callback) - Responsavel por executar algum comando


app.get('/soma', (req, res) => {
  const soma = 100 + 1;

  res.send({ soma: soma })
});

app.listen(3000)
