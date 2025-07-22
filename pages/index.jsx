export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900">
      {/* Navigation Bar */}
      <nav className="p-6 backdrop-blur-sm bg-white/10">
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

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20">
        <h2 className="text-6xl font-bold text-white mb-6 text-center">
          Welcome to Katsura's World
        </h2>
        <p className="text-xl text-pink-200 mb-12 text-center">
          Explore quotes, videos, and games featuring everyone's favorite samurai terrorist!
        </p>

        {/* Feature Cards Grid - Change to 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          
          {/* Quotes Card */}
          <a href="/quotes" className="transform transition duration-300 hover:scale-105">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
              <div className="text-5xl mb-4">📜</div>
              <h3 className="text-2xl font-bold text-white mb-4">Famous Quotes</h3>
              <p className="text-pink-200">
                "It's not Zura, it's Katsura!" and more iconic lines
              </p>
            </div>
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

          {/* Chat Card - NEW */}
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