import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function VideosPage() {
  const { data: videos, error } = useSWR("/api/videos", fetcher);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  // Function to get YouTube thumbnail
  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
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
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          Epic Katsura Moments
        </h1>

        {/* Error State */}
        {error && (
          <p className="text-white text-xl text-center">Error loading videos</p>
        )}

        {/* Loading State */}
        {!videos && !error && (
          <p className="text-white text-xl text-center animate-pulse">Loading videos...</p>
        )}

        {/* Video Modal - Shows when a video is selected */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-pink-300"
              >
                ✕
              </button>
              
              {/* Video Player */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.url)}?autoplay=1`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay"
                />
              </div>
              
              {/* Video Title */}
              <h3 className="text-2xl font-bold text-white mt-4">
                {selectedVideo.title}
              </h3>
            </div>
          </div>
        )}

        {/* Videos Grid */}
        {videos && videos.length > 0 && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => {
              const videoId = getYouTubeId(video.url);
              
              return (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group cursor-pointer transform transition duration-300 hover:scale-105"
                >
                  {/* Video Card */}
                  <div className="bg-white/20 backdrop-blur-md rounded-xl overflow-hidden">
                    {/* Thumbnail */}
                    <div className="relative aspect-video">
                      {videoId ? (
                        <>
                          <img
                            src={getYouTubeThumbnail(videoId)}
                            alt={video.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to lower quality if maxres fails
                              e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                            }}
                          />
                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition">
                            <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition">
                              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                              </svg>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-purple-800 flex items-center justify-center">
                          <p className="text-white">Invalid video</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Video Title */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {videos && videos.length === 0 && (
          <p className="text-white text-xl text-center">No videos available</p>
        )}
      </div>
    </div>
  );
}