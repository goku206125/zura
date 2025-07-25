// pages/index.jsx
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Array of hero images with text
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

  // Auto-rotate images every 4 seconds
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

      {/* Hero Section with Enhanced Image Blending */}
      <div className="relative min-h-[700px] overflow-hidden">
        
        {/* Background Images with Better Blending */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image with gradients */}
            <div className="relative h-full w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute right-0 top-0 h-full w-[60%] object-cover object-left"
              />
              
              {/* Multiple gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-900/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-transparent" />
            </div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center min-h-[700px] px-6 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h2 className="text-7xl font-bold text-white mb-6 animate-fadeIn drop-shadow-2xl">
                Welcome to Katsura's World
              </h2>
              
              {/* Dynamic Quote based on current image */}
              <div className="mb-8 animate-slideIn">
                <p className="text-3xl text-pink-300 font-bold mb-2 drop-shadow-lg">
                  "{heroImages[currentImage].quote}"
                </p>
                <p className="text-xl text-pink-200 drop-shadow-md">
                  {heroImages[currentImage].description}
                </p>
              </div>

              {/* Image Selector Dots */}
              <div className="flex gap-2 mb-8">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Explore Katsura's Universe
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Quotes Card */}
            <a href="/quotes" className="group transform transition duration-300 hover:scale-105">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full group-hover:bg-white/20 border border-white/10">
                <div className="text-5xl mb-4">📜</div>
                <h3 className="text-2xl font-bold text-white mb-4">Famous Quotes</h3>
                <p className="text-pink-200">
                  "It's not Zura, it's Katsura!" and more iconic lines
                </p>
              </div>
            </a>

            {/* Videos Card */}
            <a href="/videos" className="group transform transition duration-300 hover:scale-105">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full group-hover:bg-white/20 border border-white/10">
                <div className="text-5xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold text-white mb-4">Epic Moments</h3>
                <p className="text-pink-200">
                  Watch the best Katsura scenes and comedic gold
                </p>
              </div>
            </a>

            {/* Games Card */}
            <a href="/games" className="group transform transition duration-300 hover:scale-105">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full group-hover:bg-white/20 border border-white/10">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quiz Game</h3>
                <p className="text-pink-200">
                  Test your knowledge about Katsura and Gintama!
                </p>
              </div>
            </a>

            {/* Chat Card */}
            <a href="/chat" className="group transform transition duration-300 hover:scale-105">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full group-hover:bg-white/20 border border-white/10">
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