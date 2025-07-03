//crate a data from mongoose
import express, { Request, Response } from "express";
import { User } from "../model/user.model";
import z, { string } from "zod";

export const userRoutes = express.Router();

const CrateUserValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

userRoutes.post("/create-user", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    // const body = await CrateUserValidation.parseAsync(req.body);

    const user = await User.create(body);
    res.status(201).json({
      success: true,
      massage: "user crated successfully",
      user: user,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});
//find all data-----------------
userRoutes.get("/", async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(201).json({
    success: true,
    massage: "user created successfuly",
    users,
  });
});
//single is find...I mean id get find
userRoutes.get("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findOne({ _id: userId });

  res.status(201).json({
    success: true,
    massage: "user created successfuly",
    user,
  });
});

//mongoose update
userRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updateBody = req.body;
  const user = await User.findByIdAndUpdate(userId, updateBody, { new: true });

  res.status(201).json({
    success: true,
    massage: "user created successfuly",
    user,
  });
});

//mongoose delete
userRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updateBody = req.body;
  const user = await User.findByIdAndDelete(userId);

  res.status(201).json({
    success: true,
    massage: "user created successfuly",
    user,
  });
});
