import { model, Schema } from "mongoose";
import type { IStaff, ICustomer } from "../types/interfaces.js";

const StaffSchema = new Schema<IStaff>({
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
    required: false,
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

const CustomerSchema = new Schema<ICustomer>({
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
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // dateOfBirth: {
  //   type: Date,
  //   required: true,
  // },
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

export const Customer = model<ICustomer>("Customer", CustomerSchema);
export const Staff = model<IStaff>("Staff", StaffSchema);
