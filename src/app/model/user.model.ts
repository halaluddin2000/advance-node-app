import { model, Schema } from "mongoose";
import { IAddress, IUser } from "../interface/user.interface";
import validator from "validator";

const addressSchema = new Schema<IAddress>(
  {
    country: { type: String },
    city: { type: String },
    zip: { type: Number },
  },
  { _id: false }
);

const userSchema = new Schema<IUser>(
  {
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
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Invalit email send {VALUE}"],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    address: {
      type: addressSchema,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = model("User", userSchema);
