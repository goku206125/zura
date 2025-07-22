import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Send message to chat API
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    // Add user message to chat
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Call our chat API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Add Katsura's response
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.response 
        }]);
      } else {
        // Show error message
        setMessages(prev => [...prev, { 
          role: 'error', 
          content: 'Failed to get response. Try again!' 
        }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'error', 
        content: 'Something went wrong!' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900">
      {/* Navigation */}
      <nav className="p-6 backdrop-blur-sm bg-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white hover:text-pink-300 transition">
            ← Back to Home
          </a>
          <h1 className="text-2xl font-bold text-white">
            Chat with Katsura
          </h1>
        </div>
      </nav>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {/* Welcome Message */}
            {messages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-2xl text-white mb-4">
                  Zura janai, Katsura da! 🗡️
                </p>
                <p className="text-pink-200">
                  Ask me anything about my fight for justice, Elizabeth, or why it's definitely NOT Zura!
                </p>
              </div>
            )}

            {/* Chat Messages */}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    msg.role === 'user'
                      ? 'bg-pink-500 text-white'
                      : msg.role === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <p className="font-bold mb-1">Katsura:</p>
                  )}
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-white animate-pulse">Katsura is thinking...</p>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={sendMessage} className="p-6 border-t border-white/20">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Try calling me Zura... I dare you!"
                className="flex-1 bg-white/20 text-white placeholder-pink-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white font-bold px-6 py-3 rounded-lg transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}