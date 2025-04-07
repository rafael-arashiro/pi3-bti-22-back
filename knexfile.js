require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_ADDON_HOST,
      port: process.env.MYSQL_ADDON_PORT,
      user: process.env.MYSQL_ADDON_USER,
      password: process.env.MYSQL_ADDON_PASSWORD,
      database: process.env.MYSQL_ADDON_DB,
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
