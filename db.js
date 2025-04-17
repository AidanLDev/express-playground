import pg from "pg";
const { Pool } = pg;

// TODO: Store secrets securely
const pool = Pool({
  user: "xxx",
  host: "localhost",
  database: "express_playground",
  password: "xxx",
  port: 5432,
});

// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected successfully:", res.rows[0]);
  }
});

export default pool;
