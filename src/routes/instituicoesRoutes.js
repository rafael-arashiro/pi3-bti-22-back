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
  router.post('/', async (request, response, next) => {
    const enderecoInstituicao = `${request.body.endereco}, ${request.body.cidade}, ${request.body.estado}, Brasil`;

    const instituicao = await app.services.geocodingService
      .CoordenadasDeEndereco(enderecoInstituicao)
      .catch((err) => next(err));

    const novaInstituicao = {
      nome: request.body.nome,
      localx: instituicao.localx,
      localy: instituicao.localy,
      servico: request.body.servico,
    };

    app.services.instituicoesServices
      .postInstituicoes(novaInstituicao)
      .then((result) => response.status(201).json(result[0]))
      .catch((err) => next(err));
  });

  router.get('/:servico', (request, response, next) => {
    app.services.instituicoesServices
      .getInstituivoesPorServico(request.params.servico)
      .then((result) => response.status(200).json(result))
      .catch((err) => next(err));
  });

  router.patch('/:id', (request, response, next) => {
    app.services.instituicoesServices
      .updateInstituicoes(request.params.id, request.body)
      .then(() => response.status(204).send())
      .catch((err) => next(err));
  });

  router.delete('/:id', (request, response, next) => {
    app.services.instituicoesServices
      .deleteInstituicao(parseInt(request.params.id))
      .then(() => response.status(204).send())
      .catch((err) => next(err));
  });

  return router;
};
