// pages/_app.jsx
import "../styles/globals.css";
import { useState, useEffect, useRef } from 'react';

export default function App({ Component, pageProps }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // This path works for ALL USERS when deployed to Vercel
    audioRef.current = new Audio('/zura-theme.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    const savedMusicState = localStorage.getItem('musicEnabled');
    if (savedMusicState === 'true') {
      audioRef.current.play().catch(() => {
        console.log('Autoplay blocked');
      });
      setIsMusicPlaying(true);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
      localStorage.setItem('musicEnabled', 'false');
    } else {
      audioRef.current.play().then(() => {
        localStorage.setItem('musicEnabled', 'true');
      }).catch((error) => {
        console.error('Playback failed:', error);
      });
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
      >
        <div className="relative">
          {isMusicPlaying ? (
            <div className="relative">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          )}
        </div>
        
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {isMusicPlaying ? 'Music ON' : 'Music OFF'}
        </span>
      </button>

      {isMusicPlaying && (
        <div className="fixed bottom-20 right-8 pointer-events-none">
          <div className="animate-bounce-slow">🎵</div>
        </div>
      )}

      <Component {...pageProps} />
    </>
  );
}