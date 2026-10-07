import "dotenv/config";
import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import customer from "./routes/Customer.js";

const app = express();
const URI = process.env.URI;
const PORT = process.env.PORT;

app.use(express.static("public", { extensions: ["html"] }));

app.use("/api", customer);

app.get("/", (req, res) => {
  res.send("Hello world");
});

if (!URI) {
  throw Error;
}

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDB() {
  try {
    await client.connect();
    console.log(`Successfully connected to DB`);
  } catch {
    console.error(`Error`);
  }
}

connectToDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
