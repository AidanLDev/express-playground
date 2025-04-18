import express from "express";
import pool from "../db/db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const query = req.query;
  console.log("You passed in a query did ya?...: ", query);

  console.log("Will try get users from the db");
  try {
    const result = pool.query("SELECT * FROM users;");
    return res.json(result.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error fetching users");
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Hello from the user route with id: ${id}`);
});

router.post("/", (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send("Missing body! How can I live without a body?!");
  }

  const { name, age } = req.body;

  if (!name || !age) {
    return res
      .status(400)
      .send("You must give us your age and name!! OR ELSE :(");
  }

  res.send(`Hello ${name}, you are ${age} years old, a fine age indeed...`);
});

router.put("/", async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send("Missing body! How can I live without a body?!");
  }

  const { first_name, last_name, age } = req.body;

  if (!first_name || !last_name || !age) {
    return res
      .status(400)
      .send("You must give us your age and name!! OR ELSE :(");
  }

  const query = `INSERT INTO users(first_name, last_name, age, created_at)
    VALUES ($1, $2, $3, NOW())
    RETURNING *;
  `;

  try {
    const result = await pool.query(query, [first_name, last_name, age]);
    if (result.rows.length === 0) {
      return res.status(400).send("Error creating user");
    }
    console.log("Just added a user! : ", result.rows[0]);
    return res.json(result.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error creating user");
  }
});

export default router;
