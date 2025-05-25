import express from "express";
import { insertUser, selectUsers } from "../db/queries/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("Will try get users from the db");
  try {
    const users = await selectUsers();
    return res.status(200).send(users);
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

  try {
    const user = await insertUser({ first_name, last_name, age });
    if (!user) {
      return res.status(400).send("Error creating user");
    }
    console.log("Just added a user! : ", user);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error creating user");
  }
});

export default router;
