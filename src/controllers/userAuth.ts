import express, { type Express, type RequestHandler } from "express";
import { Customer } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const newCustomer: RequestHandler = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      middlename,
      password,
      email,
      phoneNumber,
      address,
    } = req.body;

    const user = await Customer.findOne({ email });
    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const customer = new Customer({
        firstname: firstname,
        lastname: lastname,
        middlename: middlename,
        password: hashedPassword,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
      });
      await customer.save();

      const newCustomer = {
        firstname: customer.firstname,
        email: customer.email,
      };
      res.status(201).json(newCustomer);
    } else {
      res.status(409).send("User exists");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send(`Something went wrong.`);
  }
};

export const existingCustomer: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Customer.findOne({ email });
    if (!user) {
      return res.status(404).send(`User doesn't exist`);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send(`Wrong password`);
    } else {
      return res.status(200).send(`Login successful`);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send(`Server error`);
  }
};
