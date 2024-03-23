import { PrismaClient, Prisma } from "@prisma/client";
import { prismaExclude } from "../helpers/prisma.helper";

const prisma = new PrismaClient();

export const createPost = async (data: Prisma.PostCreateInput) => {
  const post = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      author: data.author,
    },
  });

  return post;
};

export const getPosts = async (id?: number) => {
  return await prisma.post.findMany({
    where: id ? { id: id } : undefined,
    select: {
      id: true,
      createdAt: true,
      visible: true,
      title: true,
      content: true,
      author: {
        select: {
          id: true,
          fullname: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};
