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

  const getInstituicoesPorServico = async (servico) => {
    const instituicoesListaPorServico = await app
      .db('instituicoes')
      .where({ servico })
      .select('*');

    return instituicoesListaPorServico;
  };

  const updateInstituicao = async (id, instituicao) => {
    return app.db('instituicoes').where({ id }).update(instituicao);
  };

  const deleteInstituicao = async (id) => {
    return app.db('instituicoes').where({ id }).del();
  };

  return {
    getInstituicoes,
    postInstituicoes,
    getInstituicoesPorServico,
    updateInstituicao,
    deleteInstituicao,
  };
};
