// pages/index.jsx
import { useState, useEffect } from 'react'; // ADD THIS IMPORT AT THE TOP

export default function Home() {
  // ADD THESE LINES RIGHT AFTER function Home() {
  const [showKatsura, setShowKatsura] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowKatsura(true), 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 relative overflow-hidden"> {/* ADD relative overflow-hidden to this div */}
      
      {/* INSERT ALL KATSURA IMAGES HERE - RIGHT AFTER THE OPENING DIV */}
      
      {/* Floating Afro Katsura - Top Left */}
      <div className={`absolute top-20 left-10 transition-all duration-1000 ${showKatsura ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <img 
          src="/images/afro.png" 
          alt="Katsura with Afro" 
          className="w-32 h-32 object-contain animate-bounce-slow"
        />
        <div className="absolute -bottom-8 left-0 bg-white rounded-lg p-2 shadow-lg">
          <p className="text-sm font-bold text-purple-900">Zura janai, Katsura da!</p>
        </div>
      </div>

      {/* Captain Katsura - Right Side Peeking */}
      <div className={`fixed right-0 top-1/2 -translate-y-1/2 transition-all duration-1000 delay-300 ${showKatsura ? 'translate-x-0' : 'translate-x-full'}`}>
        <img 
          src="/images/captain.png" 
          alt="Captain Katsura" 
          className="w-24 h-24 object-contain hover:scale-110 transition-transform cursor-pointer"
          style={{ marginRight: '-40px' }}
          onMouseEnter={(e) => e.target.style.marginRight = '0px'}
          onMouseLeave={(e) => e.target.style.marginRight = '-40px'}
        />
      </div>

      {/* Spinning Elizabeth & Katsura - Bottom Right */}
      <div className="absolute bottom-10 right-10 animate-spin-slow">
        <img 
          src="/images/with-elizabeth.png" 
          alt="Katsura with Elizabeth" 
          className="w-20 h-20 object-contain opacity-50"
        />
      </div>

      {/* Comedy Gold - Top Right Corner */}
      <div className="absolute top-10 right-10 animate-float">
        <img 
          src="/images/comedy-gold.png" 
          alt="Comedy Katsura" 
          className="w-16 h-16 object-contain opacity-30"
        />
      </div>

      {/* Serious Leader - Bottom Left */}
      <div className="fixed bottom-20 left-10 animate-pulse">
        <img 
          src="/images/serious-leader.png" 
          alt="Serious Katsura" 
          className="w-24 h-24 object-contain opacity-70"
        />
      </div>

      {/* END OF KATSURA IMAGES */}

      {/* Navigation Bar - ADD relative z-10 to keep it above images */}
      <nav className="p-6 backdrop-blur-sm bg-white/10 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white animate-pulse">
            Zura janai, Katsura da!
          </h1>
          <div className="space-x-6">
            <a href="/quotes" className="text-white hover:text-pink-300 transition duration-300">Quotes</a>
            <a href="/videos" className="text-white hover:text-pink-300 transition duration-300">Videos</a>
            <a href="/games" className="text-white hover:text-pink-300 transition duration-300">Games</a>
            <a href="/chat" className="text-white hover:text-pink-300 transition duration-300">Chat</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - ADD relative z-10 to keep it above background images */}
      <div className="flex flex-col items-center justify-center px-6 py-20 relative z-10">
        <h2 className="text-6xl font-bold text-white mb-6 text-center">
          Welcome to Katsura's World
        </h2>
        <p className="text-xl text-pink-200 mb-12 text-center">
          Explore quotes, videos, and games featuring everyone's favorite samurai terrorist!
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          
          {/* Quotes Card - ADD relative for image positioning */}
          <a href="/quotes" className="transform transition duration-300 hover:scale-105 relative">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
              <div className="text-5xl mb-4">📜</div>
              <h3 className="text-2xl font-bold text-white mb-4">Famous Quotes</h3>
              <p className="text-pink-200">
                "It's not Zura, it's Katsura!" and more iconic lines
              </p>
            </div>
            {/* Small image on card */}
            <img 
              src="/images/serious-leader.png" 
              alt="Serious Katsura" 
              className="absolute -top-4 -right-4 w-16 h-16 object-contain transform rotate-12"
            />
          </a>

          {/* Videos Card */}
          <a href="/videos" className="transform transition duration-300 hover:scale-105">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Epic Moments</h3>
              <p className="text-pink-200">
                Watch the best Katsura scenes and comedic gold
              </p>
            </div>
          </a>

          {/* Games Card */}
          <a href="/games" className="transform transition duration-300 hover:scale-105">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quiz Game</h3>
              <p className="text-pink-200">
                Test your knowledge about Katsura and Gintama!
              </p>
            </div>
          </a>

          {/* Chat Card */}
          <a href="/chat" className="transform transition duration-300 hover:scale-105">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Chat with Katsura</h3>
              <p className="text-pink-200">
                Talk to the legendary samurai terrorist!
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}