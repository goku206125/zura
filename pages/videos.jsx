import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function VideosPage() {
  const { data: videos, error } = useSWR("/api/videos", fetcher);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    // Handle embed URLs (your database stores these)
    const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
    if (embedMatch) return embedMatch[1];
    
    // Handle regular YouTube URLs as fallback
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  // Function to get YouTube thumbnail - FIXED to use hqdefault
  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
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
      <div className="px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fadeIn">
            Epic Katsura Moments
          </h1>
          <p className="text-pink-200 text-xl">
            ZURA JANAI, KATSURA DA! Watch the most legendary moments of our revolutionary leader
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-white text-xl mb-4">Error loading videos</p>
            <p className="text-pink-200">The revolution will not be televised... due to technical difficulties</p>
          </div>
        )}

        {/* Loading State */}
        {!videos && !error && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-white text-xl animate-pulse mb-4">Loading revolutionary content...</div>
            <div className="text-pink-200">Elizabeth is fetching the videos</div>
          </div>
        )}

        {/* Video Modal - Shows when a video is selected */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-6xl animate-slideIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-pink-300 transition-colors"
              >
                ✕
              </button>
              
              {/* Video Player Container */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={`${selectedVideo.url}?autoplay=1`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allowFullScreen
                    allow="autoplay; fullscreen"
                  />
                </div>
                
                {/* Video Title */}
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedVideo.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Videos Grid */}
        {videos && videos.length > 0 && (
          <div className="max-w-7xl mx-auto">
            {/* Video Count */}
            <p className="text-pink-200 mb-6 text-center">
              {videos.length} Revolutionary Videos Available
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => {
                const videoId = getYouTubeId(video.url);
                
                return (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className="group cursor-pointer transform transition-all duration-300 hover:scale-105 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Video Card */}
                    <div className="bg-white/20 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-colors">
                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden">
                        {videoId ? (
                          <>
                            <img
                              src={getYouTubeThumbnail(videoId)}
                              alt={video.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                // IMPROVED FALLBACK CHAIN
                                if (e.target.src.includes('hqdefault')) {
                                  e.target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                                } else if (e.target.src.includes('mqdefault')) {
                                  e.target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
                                }
                              }}
                            />
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                              <div className="bg-red-600 rounded-full p-5 group-hover:scale-110 transition-transform shadow-2xl">
                                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                                </svg>
                              </div>
                            </div>
                            {/* Duration Badge (decorative) */}
                            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                              {Math.floor(Math.random() * 10 + 5)}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-purple-800 to-pink-800 flex items-center justify-center">
                            <p className="text-white">Video Unavailable</p>
                          </div>
                        )}
                      </div>
                      
                      {/* Video Title */}
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-pink-200 transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-pink-300 text-sm mt-2 opacity-80">
                          Click to watch
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {videos && videos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-white text-xl mb-4">No videos available</p>
            <p className="text-pink-200">The revolution will be uploaded soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}