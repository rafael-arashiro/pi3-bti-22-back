const express = require('express');

module.exports = (app) => {
  const router = express.Router();

  //Rota get
  router.get('/', (request, response, next) => {
    app.services.instituicoesServices
      .getInstituicoes()
      .then((result) => response.status(200).json(result))
      .catch((err) => next(err));
  });
  //Rota post
  router.post('/', (request, response, next) => {
    app.services.instituicoesServices
      .postInstituicoes(request.body)
      .then((result) => response.status(201).json(result[0]))
      .catch((err) => next(err));
  });

  router.put('/:id', (request, response, next) => {});

  router.get('/:id', (request, response, next) => {});

  router.patch('/:id', (request, response, next) => {});

  router.delete('/:id', (request, response, next) => {});

  return router;
};
