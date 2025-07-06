//crate a data from mongoose
import express, { Request, Response } from "express";
import { Note } from "../model/note.model";

export const noteRoutes = express.Router();

noteRoutes.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;

  //noteRoutesroach-1
  // const myNote = new Note({
  //   title: "Learning Mongoose",
  //   // content: "advence note noteRoutes",
  //   tags: {
  //     label: "node",
  //   },
  // });
  // await myNote.save();

  const note = await Note.create(body);

  res.status(201).json({
    success: true,
    massage: "Note created successfuly",
    note,
  });
});
//find all data-----------------
noteRoutes.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find().populate("user");

  res.status(201).json({
    success: true,
    massage: "Note created successfuly",
    notes,
  });
});
//single is find...I mean id get find
noteRoutes.get("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findOne({ _id: noteId });

  res.status(201).json({
    success: true,
    massage: "Note created successfuly",
    note,
  });
});

//mongoose update
noteRoutes.patch("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const updateBody = req.body;
  const note = await Note.findByIdAndUpdate(noteId, updateBody, { new: true });

  res.status(201).json({
    success: true,
    massage: "Note created successfuly",
    note,
  });
});

//mongoose delete
noteRoutes.delete("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const updateBody = req.body;
  const note = await Note.findByIdAndDelete(noteId, updateBody);

  res.status(201).json({
    success: true,
    massage: "Note created successfuly",
    note,
  });
});
