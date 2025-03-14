import mongoose from "mongoose";
import express, { Express, Request, Response } from "express";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";

mongoose.connect("mongodb+srv://username:password@cluster0.fa4uj.mongodb.net/");
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/", articleController);

app.use("/", commentController);

app.listen(3000, () => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});
