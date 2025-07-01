import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();

const noteSchema = new Schema({
  title: String,
  content: String,
});

const Note = model("Note", noteSchema);

app.post("/create-note", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "Learning Mongoose",
    content: "advence note app",
  });
  await myNote.save();

  res.status(201).json({
    success: true,
    massage: "Note created successfuly",
    node: myNote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to note app");
});

export default app;
