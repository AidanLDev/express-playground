import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const query = req.query;
  if (query?.name === "aidan") {
    res.send(`Hello!!!! You are the chosen one!`);
    return;
  } else if (query?.name) {
    res.send(`Hello ${query.name}, how are you today?`);
    return;
  }
  res.send("Hello from the user route");
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

export default router;
