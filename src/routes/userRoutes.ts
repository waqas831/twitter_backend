import { PrismaClient } from "@prisma/client";
// implement all the routes of user get delete update etc
import express from "express";
const prisma = new PrismaClient();

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, image } = req.body;
  const addUser = await prisma.user.create({
    data: {
      name,
      email,
      image,
    },
  });
  res.send(addUser);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const userDetails = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.send(userDetails);
});

router.delete("/:id", async(req, res) => {
  const id = req.params.id;
  const deleteUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.send("deleeted");
});

export default router;
