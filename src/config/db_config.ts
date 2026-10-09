import "dotenv/config";
import mongoose from "mongoose";

const URI = process.env.URI;

export async function connectToDB() {
  if (!URI) {
    throw new Error(`Missing URI environment variable`);
  }

  try {
    await mongoose.connect(URI, {
      dbName: "fabric_kingpin",
    });
    console.log(`Connection to db successful`);
  } catch (err) {
    console.error(err);
  }
}
