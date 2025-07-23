// pages/api/music-url.js
import { head } from '@vercel/blob';

export default async function handler(req, res) {
  try {
    // Your music file name in blob storage
    const { url } = await head('zura-theme.mp3');
    
    res.status(200).json({ url });
  } catch (error) {
    console.error('Error fetching music URL:', error);
    res.status(500).json({ error: 'Failed to get music URL' });
  }
}