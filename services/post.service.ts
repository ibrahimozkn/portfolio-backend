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

export const getPosts = async (
  id?: number,
  authourId?: number,
  page: number = 0,
  take: number = 10
) => {
  return await prisma.post.findMany({
    skip: page,
    take: take,
    //only put authorId statement if authourId is not null also put id statement if id is not null
    where: {
      authorId: authourId,
      id: id,
    },
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

export const deletePost = async (id: number) => {
  return prisma.post.delete({
    where: {
      id: id,
    },
  });
};

export const updatePost = async (
  id: number,
  data: Prisma.PostUpdateInput,
  userId: number
) => {
  return prisma.post.update({
    where: {
      authorId: userId,
      id: id,
    },
    data: data,
  });
};
