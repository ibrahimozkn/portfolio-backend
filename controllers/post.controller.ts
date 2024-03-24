import { Request, Response, NextFunction } from "express";
import {
  createPost,
  getPosts,
  deletePost,
  updatePost,
} from "../services/post.service";
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
    const { id, authorId, take, page } = req.body;
    const posts = await getPosts(id, authorId, page, take);

    return res.status(200).json({ message: "Success", posts: posts });
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
    const id = parseInt(req.params.id as string);
    const post = await deletePost(id);

    return res.status(200).json({
      message: "Success!",
      post: post,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id as string);
    const { title, content } = req.body;
    const user = (req as any).user;
    const post = await updatePost(
      id,
      { title: title, content: content },
      user.id
    );

    return res.status(200).json({
      message: "Success!",
      post: post,
    });
  } catch (error) {
    next(error);
  }
};
