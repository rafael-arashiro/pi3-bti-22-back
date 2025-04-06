exports.up = async (knex) => {
  await knex.schema.createTable('instituicoes', (t) => {
    t.increments('id').primary();
    t.string('nome').notNull();
    t.string('localx').notNull();
    t.string('localy').notNull();
    t.string('servico').notNull();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('instituicoes');
};
