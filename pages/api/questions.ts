import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const questions = await prisma.question.findMany();
  res.status(200).json(questions);
}
