require("dotenv").config();
import { Response, Request, NextFunction } from "express";
import { PrismaClient, User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { generateToken } from "../helpers/jwt.helper";

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

export const signin = async (email: string, password: string) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw "Invalid credentials!";
  }

  const isValid: boolean = await bcrypt.compare(password, user?.password);

  if (!isValid) {
    throw "Invalid credentials!";
  } else {
    const token = generateToken(user);
    console.log(token);

    return token;
  }
};
