require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.SERVER,
      port: process.env.PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
