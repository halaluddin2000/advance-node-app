import express, { Application, Request, Response } from "express";
import { noteRoutes } from "./colleberation/note.collebaration";
import { userRoutes } from "./colleberation/user.controller";

const app: Application = express();
app.use(express.json());

app.use("/notes", noteRoutes);
app.use("/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to note app");
});

export default app;
