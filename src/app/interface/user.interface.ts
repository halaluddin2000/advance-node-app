import { Model } from "mongoose";

export interface IAddress {
  country: string;
  city: string;
  zip: number;
}

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  role: "user" | "admin";
  address: IAddress;
}

export interface UserInstantMethods {
  hashPassword(password: string): string;
}

export interface UserStaticMethods extends Model<IUser> {
  hashPassword(password: string): string;
}
