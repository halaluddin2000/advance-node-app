import { Model, model, Schema } from "mongoose";
import {
  IAddress,
  IUser,
  UserInstantMethods,
  UserStaticMethods,
} from "../interface/user.interface";
import validator from "validator";
import bcrypt from "bcryptjs";
import { Note } from "./note.model";

const addressSchema = new Schema<IAddress>(
  {
    country: { type: String },
    city: { type: String },
    zip: { type: Number },
  },
  { _id: false }
);

const userSchema = new Schema<IUser, Model<IUser>, UserInstantMethods>(
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
userSchema.method("hashPassword", async function (planPassword: string) {
  const password = await bcrypt.hash(planPassword, 10);
  return password;
});

userSchema.static("hashPassword", async function (planPassword: string) {
  const password = await bcrypt.hash(planPassword, 10);
  return password;
});

//pre Hooks

//Document Middleware

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

//Query Middleware

userSchema.pre("find", function (doc) {
  console.log(doc);
});

//Post Hook

//Document Middleware
userSchema.post("save", function (doc) {
  console.log(`%email has been saved`, doc.email);
});
//Query Middleware
userSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    console.log(doc);
    await Note.deleteMany({ user: doc._id });
  }
});

export const User = model<IUser, UserStaticMethods>("User", userSchema);
