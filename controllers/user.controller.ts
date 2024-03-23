import { Request, Response, NextFunction } from "express";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
} from "../services/user.service";

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getUsers();

    return res.status(201).json(users);
  } catch (error: any) {
    error.status = 500;
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, fullname } = req.body;
    const user = await createUser({
      email: email,
      password: password,
      fullname: fullname,
    });

    return res.status(200).json({ message: "Success!", user: user });
  } catch (error: any) {
    next(error);
  }
};

export const fetch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: number = parseInt(req.params.id as string);

    const user = await getUser(id);

    return res.status(200).json({ message: "Success!", user: user });
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: number = parseInt(req.params.id as string);

    const user = await deleteUser(id);

    return res.status(200).json({ message: "Success!", user: user });
  } catch (error: any) {
    next(error);
  }
};
