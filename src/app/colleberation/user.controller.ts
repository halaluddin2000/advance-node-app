export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
}
