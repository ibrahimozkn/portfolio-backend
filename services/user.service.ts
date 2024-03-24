import { PrismaClient, Prisma } from "@prisma/client";
import { prismaExclude } from "../helpers/prisma.helper";

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

export const createUser = async (data: Prisma.UserCreateInput) => {
  const pwd = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: pwd,
      fullname: data.fullname,
    },
    select: {
      id: true,
      email: true,
      fullname: true,
    },
  });

  return user;
};

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: prismaExclude("User", ["password"]),
  });

  return users;
};

export const getUser = async (id: number) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      id: id,
    },
    select: prismaExclude("User", ["password"]),
  });

  return user;
};

export const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
      fullname: true,
    },
  });

  return user;
};

export const updateProfilePicture = async (id: number, url: string) => {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      profileUrl: url,
    },
    select: {
      id: true,
      fullname: true,
      email: true,
      profileUrl: true,
    },
  });

  return user;
};

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
    select: prismaExclude("User", ["password"]),
  });

  return user;
};
