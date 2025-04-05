const express = require('express');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Bem vindo.');
});

app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
