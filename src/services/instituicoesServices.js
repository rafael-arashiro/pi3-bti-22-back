module.exports = (app) => {
  //Pega as intituições do banco de dados
  const getInstituicoes = async () => {
    const instituicoesLista = await app.db('instituicoes').select('*');

    return instituicoesLista;
  };

  //Cria a intituição no banco de dados
  const postInstituicoes = async (instituicao) => {
    await app.db('instituicoes').insert({
      nome: instituicao.nome,
      localx: instituicao.localx,
      localy: instituicao.localy,
      servico: instituicao.servico,
    });

    return app.db('instituicoes').where({ nome: instituicao.nome });
  };

  return {
    getInstituicoes,
    postInstituicoes,
  };
};
