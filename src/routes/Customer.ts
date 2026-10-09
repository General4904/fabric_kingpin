import express, { type Express } from "express";
import { newCustomer, existingCustomer } from "../controllers/userAuth.js";

const router = express.Router();

router.post("/newCustomer", newCustomer);
router.post("/existingCustomer", existingCustomer);

export default router;
