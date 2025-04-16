import express from "express";
import rootRouter from "./routes/root.js"
import userRouter from "./routes/user.js"

const app = express();
const port = "3000";

// Middleware
app.use(express.json())
// Server static files from the public dir
app.use(express.static('public'))

// Routes
app.use("/", rootRouter)
app.use("/user", userRouter)

app.listen(port, () => {
  console.log(`Server open on http://localhost:${port}`);
})

