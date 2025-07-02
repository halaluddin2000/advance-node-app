import { model, Schema } from "mongoose";
import { IUser } from "../colleberation/user.controller";

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 10,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 60,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

export const User = model("User", userSchema);
