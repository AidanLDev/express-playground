import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const knexInstance = knex({
  client: "pg",
  connect: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "../migrations",
  },
});

export default knexInstance;
