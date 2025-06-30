import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const PROT = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("mongodb for mongoose");
    server = app.listen(PROT, () => {
      console.log(`app is listening on port ${PROT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
