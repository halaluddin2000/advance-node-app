import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const PROT = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://todoapp:todoapp@cluster0.jao09dz.mongodb.net/advance-note-app?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mongodb for mongoose");
    server = app.listen(PROT, () => {
      console.log(`app is listening on port ${PROT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
