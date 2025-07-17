import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function QuotesPage() {
  const { data: quotes, error } = useSWR("/api/quotes", fetcher);
  const [currentQuote, setCurrentQuote] = useState(0);

  // Navigation functions
  const nextQuote = () => {
    if (quotes) setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    if (quotes) setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900">
      {/* Navigation */}
      <nav className="p-6 backdrop-blur-sm bg-white/10">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="text-white hover:text-pink-300 transition">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-5xl font-bold text-white mb-12">
          Katsura's Wisdom
        </h1>

        {/* Error State */}
        {error && (
          <p className="text-white text-xl">Error loading quotes</p>
        )}

        {/* Loading State */}
        {!quotes && !error && (
          <p className="text-white text-xl animate-pulse">Loading…</p>
        )}

        {/* Quotes Display */}
        {quotes && quotes.length > 0 && (
          <div className="max-w-4xl w-full">
            {/* Quote Card */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-12 mb-8 transform transition duration-300 hover:scale-105">
              <p className="text-3xl text-white text-center font-medium">
                "{quotes[currentQuote]?.text}"
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevQuote}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition"
              >
                ← Previous
              </button>
              
              <span className="text-white flex items-center px-4">
                {currentQuote + 1} / {quotes.length}
              </span>
              
              <button
                onClick={nextQuote}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}