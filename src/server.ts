import "dotenv/config";
import express from "express";
import customer from "./routes/Customer.js";
import { connectToDB } from "./config/db_config.js";

const app = express();

app.use(express.static("public", { extensions: ["html"] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", customer);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT;

await connectToDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
