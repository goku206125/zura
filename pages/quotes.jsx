// pages/quotes.jsx
import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function QuotesPage() {
  const { data: dbQuotes, error } = useSWR("/api/quotes", fetcher);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  
  const hardcodedQuotes = [
    "It's not Zura, it's Katsura!",
    "I'm not Lupin, I'm Zura. Oops, I mean Katsura.",
    "It's not rap, it's Katsurap, yo.",
    "It's not Zura. It's Captain Katsura, dattebayo!",
    "Zura ja nai! Katsura da!",
    "Katsura ja nai! Zura da!",
    "OROKAMONO JANAI, KATSURA DA!",
    "Daijobu janai katsura da!",
    "Zurump ja nai! Katsura da!",
    "I'm not okay, I'm Katsura!",
    "K-san ja nai, Katsura da!",
    "Zuramp ja nai, Katsura da!",
    "Zuracchi ja nai, Ill Smith da!",
    "I'm not into married women, I'm into NTR",
    "Good evening, I'm Santa Claus.",
    "Don't you know? Sticks always come with balls.",
    "I'm keeping a secret, I'm actually a foreigner.",
    "Sushi, geisha, sumo, Japanimation is good!",
    "CONAN IS AWESOME!",
    "Yo, yo, yo, it's Katsurap in the house!",
    "I'm not Zura, I'm Yellow Curry Ninja!",
    "I'm not Zura, I'm Zurako!",
    "I'm not Zura, I'm Space Captain Katsura!",
    "It's not a wig, it's my real hair!",
    "I'm not a terrorist, I'm a Joi patriot!",
    "Elizabeth, let's go! To the ends of the universe!",
    "I'm not a samurai, I'm a rebel!",
    "It's not a bomb, it's a surprise!",
    "I'm not running away, I'm advancing in the opposite direction!",
    "It's not a disguise, it's fashion!",
    "I'm not lost, I'm exploring new territories!",
    "It's not a mistake, it's a learning opportunity!",
    "I'm not hiding, I'm strategically positioning myself!",
    "It's not a defeat, it's a tactical retreat!",
    "I'm not alone, I have Elizabeth!",
    "It's not a pet, it's a comrade!",
    "I'm not crazy, I'm eccentric!",
    "It's not a dream, it's a vision!",
    "I'm not a fool, I'm a visionary!",
    "It's not a lie, it's an alternative truth!",
    "I'm not a coward, I'm cautious!",
    "It's not a failure, it's a step towards success!",
    "I'm not stubborn, I'm determined!",
    "It's not a problem, it's a challenge!",
    "I'm not weak, I'm conserving energy!",
    "It's not a setback, it's a setup for a comeback!",
    "I'm not avoiding responsibility, I'm delegating!",
    "It's not a disaster, it's an opportunity in disguise!",
    "I'm not procrastinating, I'm prioritizing!",
    "It's not a loss, it's a lesson!",
    "I'm not giving up, I'm changing strategy!",
    "It's not a weakness, it's a strength in disguise!",
    "I'm not afraid, I'm excited!",
    "It's not a risk, it's an adventure!",
    "I'm not a leader, I'm a servant of the people!",
    "It's not a rebellion, it's a revolution!",
    "I'm not a hero, I'm just doing what's right!",
    "It's not a sacrifice, it's an investment in the future!",
    "I'm not a dreamer, I'm a realist with imagination!",
    "It's not a fantasy, it's a possibility!",
    "I'm not Zura, I'm Katsura, and don't you forget it!"
  ];

  const allQuotes = dbQuotes 
    ? [...dbQuotes.map(q => q.text), ...hardcodedQuotes]
    : hardcodedQuotes;

  const imageFiles = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.png`);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageFiles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % allQuotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + allQuotes.length) % allQuotes.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      
      {/* Navigation */}
      <nav className="p-6 backdrop-blur-sm bg-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white hover:text-pink-300 transition flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
          <h1 className="text-3xl font-bold text-white">Katsura's Wisdom</h1>
          <div className="space-x-6">
            <a href="/videos" className="text-white hover:text-pink-300 transition">Videos</a>
            <a href="/games" className="text-white hover:text-pink-300 transition">Games</a>
            <a href="/chat" className="text-white hover:text-pink-300 transition">Chat</a>
          </div>
        </div>
      </nav>

      {/* Main Content - Side by Side Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between gap-12 min-h-[600px]">
          
          {/* Left Side - Quotes */}
          <div className="flex-1 max-w-2xl">
            {/* Quote Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12">
              {/* Quote Number */}
              <div className="text-pink-300 text-sm mb-4">
                Quote {currentQuote + 1} of {allQuotes.length}
              </div>
              
              {/* Quote Text */}
              <p className="text-3xl text-white font-medium mb-8 leading-relaxed">
                "{allQuotes[currentQuote]}"
              </p>
              
              {/* Attribution */}
              <p className="text-xl text-pink-300 mb-8">- Katsura Kotaro</p>

              {/* Navigation Controls */}
              <div className="flex gap-4">
                <button
                  onClick={prevQuote}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                
                <button
                  onClick={nextQuote}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-pink-400 transition-all duration-300"
                  style={{ width: `${((currentQuote + 1) / allQuotes.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Cycling Images */}
          <div className="flex-1 relative h-[600px]">
            {/* Main featured image - 11.png */}
            <img
              src="/images/11.png"
              alt="Featured Katsura"
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
            
            {/* Cycling background images */}
            {imageFiles.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Katsura ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-30' : 'opacity-0'
                }`}
              />
            ))}

            {/* Image indicator dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {imageFiles.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-white w-6' 
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}