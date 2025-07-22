import { PrismaClient } from '@prisma/client'

// Global prisma instance for production
let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  // In development, use global to prevent multiple instances
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default async function handler(req, res) {
  try {
    const quotes = await prisma.quote.findMany()
    res.status(200).json(quotes)
  } catch (err) {
    console.error('Database error:', err)
    res.status(500).json({ error: 'Failed to fetch quotes' })
  }
}