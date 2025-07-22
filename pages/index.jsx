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