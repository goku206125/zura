import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900">
      {/* Navigation Bar - Stays at top */}
      <nav className="p-6 backdrop-blur-sm bg-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Main title with pulse animation */}
          <h1 className="text-3xl font-bold text-white animate-pulse">
            Zura janai, Katsura da!
          </h1>
          
          {/* Navigation links */}
          <div className="space-x-6">
            <a href="/quotes" className="text-white hover:text-pink-300 transition duration-300">Quotes</a>
            <a href="/videos" className="text-white hover:text-pink-300 transition duration-300">Videos</a>
            <a href="/games" className="text-white hover:text-pink-300 transition duration-300">Games</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Main content */}
      <div className="flex flex-col items-center justify-center px-6 py-20">
        {/* Big welcome text */}
        <h2 className="text-6xl font-bold text-white mb-6 text-center">
          Are you tired of Bakufu
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-pink-200 mb-12 text-center">
          Join the revolution with our beloved leader the great fruit punch Samurai, Zura
        </p>

        {/* Feature Cards Grid - Responsive: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          
          {/* Quotes Card - Links to quotes page */}
          <a href="/quotes" className="transform transition duration-300 hover:scale-105">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
              <div className="text-5xl mb-4">📜</div>
              <h3 className="text-2xl font-bold text-white mb-4">Wise word's by Katsura San</h3>
              <p className="text-pink-200">
                "It's not Zura, it's Katsura!"
              </p>
            </div>
          </a>

          {/* Videos Card */}
          <a href="/videos" className="transform transition duration-300 hover:scale-105">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Watch our leader in action</h3>
              <p className="text-pink-200">
                Glorious tales of Our leader Lupin
              </p>
            </div>
          </a>

          {/* Games Card */}
          <a href="/games" className="transform transition duration-300 hover:scale-105">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Application to join our organization</h3>
              <p className="text-pink-200">
                Show that you are worthy of joining our ranks
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}