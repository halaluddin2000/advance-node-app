// export interface IAddress {}

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  role: "user" | "admin";
  address: { country: string; city: string; zip: number };
}
