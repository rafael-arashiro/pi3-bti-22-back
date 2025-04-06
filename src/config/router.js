const express = require('express');

module.exports = (app) => {
  const protectedRouter = express.Router();

  protectedRouter.use('/instituicoes', app.routes.instituicoesRoutes);

  app.use('/api/v1', protectedRouter);
};
