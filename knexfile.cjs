// Update with your config settings.
require("dotenv").config();
const connectionObject = {
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
};

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: connectionObject,
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: connectionObject,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: connectionObject,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },
};
