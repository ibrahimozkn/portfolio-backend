import { PrismaClient } from "@prisma/client";
import express from "express";
import { Router, Request, NextFunction, Response } from "express";
import UserRouter from "./routes/user.route";
import AuthRouter from "./routes/auth.route";
import PostRouter from "./routes/post.route";

const app = express();
const prisma = new PrismaClient();
const cors = require("cors");

const PORT = 9000;

app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(UserRouter);
app.use(AuthRouter);
app.use(PostRouter);

app.use((err: any, request: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;

  const message = err.message || "Unknown error";
  return res.status(statusCode).json({
    message,
  });
});
async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

start();
