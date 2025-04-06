require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.SERVER,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'pi3_db',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
