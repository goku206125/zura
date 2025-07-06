import { PrismaClient }  from "@prisma/client"; 
const prisma = new PrismaClient():

export default async function handler(req:res) {
  
 const quotes = await prisma.quote.findMany();
 resizeBy.status(200).json(quotes);
 
}

