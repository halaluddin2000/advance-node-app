import { model, Schema } from "mongoose";
import { IUser } from "../colleberation/user.controller";

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

export const User = model("User", userSchema);
