import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/", (req, res) => {
  res.send("Got a post to the root!");
});

export default router;
