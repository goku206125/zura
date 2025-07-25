// pages/index.jsx
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    {
      src: '/images/afro.jpg',
      alt: 'Afro Katsura',
      quote: 'Zura janai, Katsura da!',
      description: 'The legendary samurai with the most fabulous afro'
    },
    {
      src: '/images/captain.jpg',
      alt: 'Captain Katsura',
      quote: 'I am Captain Katsura!',
      description: 'Leader of the Jouishishi rebels'
    },
    {
      src: '/images/serious-leader.jpg',
      alt: 'Serious Katsura',
      quote: 'This country needs to change',
      description: 'The serious revolutionary side'
    },
    {
      src: '/images/comedy-gold.jpg',
      alt: 'Comedy Katsura',
      quote: 'Elizabeth, what should we do?',
      description: 'Master of unintentional comedy'
    },
    {
      src: '/images/with-elizabeth.jpg',
      alt: 'Katsura with Elizabeth',
      quote: 'Elizabeth is my best friend',
      description: 'The iconic duo'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900">
      
      {/* Navigation Bar */}
      <nav className="p-6 backdrop-blur-sm bg-white/10 relative z-20">
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

      {/* Hero Section - Clean Side by Side Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between gap-12 min-h-[500px]">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-6xl font-bold text-white mb-6">
              Welcome to Katsura's World
            </h2>
            
            <div className="mb-8">
              <p className="text-3xl text-pink-300 font-bold mb-2">
                "{heroImages[currentImage].quote}"
              </p>
              <p className="text-xl text-pink-200">
                {heroImages[currentImage].description}
              </p>
            </div>

            {/* Image Selector Dots */}
            <div className="flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 relative h-[500px]">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Explore Katsura's Universe
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="/quotes" className="group transform transition duration-300 hover:scale-105">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
                <div className="text-5xl mb-4">📜</div>
                <h3 className="text-2xl font-bold text-white mb-4">Famous Quotes</h3>
                <p className="text-pink-200">
                  "It's not Zura, it's Katsura!" and more iconic lines
                </p>
              </div>
            </a>

            <a href="/videos" className="group transform transition duration-300 hover:scale-105">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
                <div className="text-5xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold text-white mb-4">Epic Moments</h3>
                <p className="text-pink-200">
                  Watch the best Katsura scenes and comedic gold
                </p>
              </div>
            </a>

            <a href="/games" className="group transform transition duration-300 hover:scale-105">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quiz Game</h3>
                <p className="text-pink-200">
                  Test your knowledge about Katsura and Gintama!
                </p>
              </div>
            </a>

            <a href="/chat" className="group transform transition duration-300 hover:scale-105">
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
    </div>
  );
}