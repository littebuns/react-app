const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.rp_branch
  .findMany({ where: { branch: "世联达国际上海分", month: "202201" } })
  .then((data) => {
    console.log(data);
  });
