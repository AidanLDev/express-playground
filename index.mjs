import express from "express";
import rootRouter from "./routes/root.js";
import userRouter from "./routes/user.js";
import ordersRouter from "./routes/orders.js";
import knex from "./db/db.js";

const app = express();
const port = "3000";

// Middleware
app.use(express.json());
// Server static files from the public dir
app.use(express.static("public"));

// Routes
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/orders", ordersRouter);

process.on("SIGINT", () => {
  knex.destroy();
  console.log("Database connection closed.");
  process.exit(0);
});

app.listen(port, () => {
  console.log(`Server open on http://localhost:${port}`);
});
