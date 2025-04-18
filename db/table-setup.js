import pool from "./db.js";

const createUsersTable = async () => {
  await pool.query(`DROP TABLE IF EXISTS users`);

  await pool.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        age INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  console.log("Users table created successfully");
};

export async function ensureDatabase() {
  try {
    await createUsersTable();
  } catch (error) {
    console.error("Error setting up database:", error);
    process.exit(1);
  }
}
