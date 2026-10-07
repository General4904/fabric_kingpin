import express, { type Express } from "express";

const router = express.Router();

router.get("/user", (req, res) => {
  console.log(`Hello`);
  res.redirect("/successful");
});

export default router;
