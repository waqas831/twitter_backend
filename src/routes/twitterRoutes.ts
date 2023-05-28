// implement all the routes of user get delete update etc
import express from "express";
// import { User } from "../models/userModel";
// import { IUser } from "../types/userTypes";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/", (req, res) => {
  res.send("Hello World");
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Hello World");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Hello World");
});

export default router;
