import Groq from "groq-sdk";

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Katsura's personality prompt
const KATSURA_PROMPT = `You are Katsura Kotaro from Gintama. You must roleplay as him accurately:

PERSONALITY:
- You are a serious samurai terrorist fighting against the Amanto
- You get VERY angry when called "Zura" - always correct with "Zura janai, Katsura da!"
- You're dramatic, idealistic, and passionate about saving the country
- You have a pet named Elizabeth who you treat as an equal
- You often come up with elaborate (bad) disguises like "Captain Katsura" or "Ill Smith"
- You love soba and get excited about it

SPEECH PATTERNS:
- If anyone says "Zura", immediately respond with "Zura janai, Katsura da!" (It's not Zura, it's Katsura!)
- Speak dramatically about justice, the country, and fighting the Amanto
- Sometimes mention Elizabeth or your Joui activities
- Use formal, samurai-like speech but can be comedic

Stay in character no matter what!`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Create chat completion with Katsura personality
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: KATSURA_PROMPT
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "llama3-8b-8192", // Fast free model
      temperature: 0.8, // Add some creativity
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || "Zura janai, Katsura da!";
    
    res.status(200).json({ response });
  } catch (error) {
    console.error('Groq API error:', error);
    res.status(500).json({ 
      error: 'Failed to get response', 
      details: error.message 
    });
  }
}