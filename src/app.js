//Esse require é para importar
const express = require('express');
const consign = require('consign');

const knex = require('knex');

const knexfile = require('../knexfile');

//a const app inicia o express
const app = express();
const port = 3000;

app.db = knex(knexfile.development);

//o consign inclui os arquivos na const app
consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./services')
  .then('./validations/instituicoes.validation.js')
  .then('./routes')
  .then('./config/router.js')
  .into(app);

//se não encontrar nenhuma rota, ele leva pra esse internal error
app.use((err, request, response, next) => {
  const { name, message, stack } = err;
  if (name === 'ValidationError') response.status(400).json({ error: message });
  else {
    response.status(500).send('an internal server error occurred');
  }
  next(err);
});

// Comando para iniciar o server
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
