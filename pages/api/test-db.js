import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  try {
    const quoteCount = await prisma.quote.count()
    const questionCount = await prisma.question.count()
    const videoCount = await prisma.video.count()
    
    res.status(200).json({ 
      success: true,
      counts: {
        quotes: quoteCount,
        questions: questionCount,
        videos: videoCount
      }
    })
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    })
  } finally {
    await prisma.$disconnect()
  }
}