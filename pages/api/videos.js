import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default async function handler(req, res) {
  try {
    const videos = await prisma.video.findMany()
    res.status(200).json(videos)
  } catch (err) {
    console.error('Database error:', err)
    res.status(500).json({ error: 'Failed to fetch videos' })
  }
}