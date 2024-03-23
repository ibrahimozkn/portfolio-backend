import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
require("dotenv").config();

export function generateToken(user: any) {
  const token = jwt.sign(
    { id: user.id, email: user.email, fullname: user.fullname },
    process.env.TOKEN_KEY as string
  );

  return token;
}
