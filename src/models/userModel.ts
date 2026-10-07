import { model, Schema, connect } from "mongoose";
import type { Staff, Customer } from "../types/interfaces.js";

const StaffSchema = new Schema<Staff>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  middlename: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    enum: ["Manager", "SalesPerson", "Kingpin", "Engineer"],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const CustomerSchema = new Schema<Customer>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    enum: ["Customer"],
    default: "Customer",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export const CustomerModel = model<Customer>("Customer", CustomerSchema);
export const StaffModel = model<Staff>("Staff", StaffSchema);
