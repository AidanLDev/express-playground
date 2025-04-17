import express from "express";
import rootRouter from "./routes/root.js"
import userRouter from "./routes/user.js"
import pool from "./db.js"

const app = express();
const port = "3000";

// Middleware
app.use(express.json())
// Server static files from the public dir
app.use(express.static('public'))

// Routes
app.use("/", rootRouter)
app.use("/user", userRouter)

pool.end(() => {
  console.log("Database connection closed")
})

app.listen(port, () => {
  console.log(`Server open on http://localhost:${port}`);
})

