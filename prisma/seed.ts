import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function main() {
  const pwd = await bcrypt.hash("123456", 10);
  const user1 = await prisma.user.upsert({
    where: { email: "syt@gmail.com" },
    update: {},
    create: {
      email: "syt@gmail.com",
      fullname: "asdasd",
      password: pwd,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
