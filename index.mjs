import express from "express";
import rootRouter from "./routes/root.js"
import userRouter from "./routes/user.js"
import pool from "./db/db.js"
import { ensureDatabase } from "./db/table-setup.js";

const app = express();
const port = "3000";

// Middleware
app.use(express.json())
// Server static files from the public dir
app.use(express.static('public'))
await ensureDatabase()

// Routes
app.use("/", rootRouter)
app.use("/user", userRouter)

process.on('SIGINT', () => {
  pool.end(() => {
    console.log("Database connection closed")
    process.exit(0)
  })
})

app.listen(port, () => {
  console.log(`Server open on http://localhost:${port}`);
})

