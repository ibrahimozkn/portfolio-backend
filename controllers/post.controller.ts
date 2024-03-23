import { Request, Response, NextFunction } from "express";
import { createPost, getPosts } from "../services/post.service";
import { prismaExclude } from "../helpers/prisma.helper";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = (req as any).user;
    const { title, content } = req.body;

    const post = await createPost({
      author: { connect: { id: user.id } },
      title: title,
      content: content,
    });

    return res.status(200).json({ message: "Success", post: post });
  } catch (error) {
    next(error);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.body;
    const posts = await getPosts(id);

    return res.status(200).json({ message: "Success", posts: posts });
  } catch (error) {
    next(error);
  }
};
