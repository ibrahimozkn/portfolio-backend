import { Request, Response, NextFunction } from "express";
import { signin } from "../services/auth.service";
import jwt, { JwtPayload } from "jsonwebtoken";

const bcrypt = require("bcrypt");

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const token = await signin(email, password);

    return res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
};

export async function verifyTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(500).json({ message: "Invalid token" });
  }

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(500).json({ message: "Invalid token" });
  }

  const token: string = authHeader!.split(" ")[1];

  jwt.verify(token, process.env.TOKEN_KEY as string, (err, decoded: any) => {
    if (err) {
      return res.status(500).json({ message: "Invalid token" });
    }

    (req as any).user = decoded;
    next();
  });
}
