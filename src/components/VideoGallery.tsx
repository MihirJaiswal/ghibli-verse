'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

interface Video {
  id: number;
  src: string;
  thumbnail: string;
}

const videos: Video[] = [
  { id: 1, src: '/spiritedaway.mp4', thumbnail: '/thumbnail1.png' },
  { id: 2, src: '/poppyhill.mp4', thumbnail: '/thumbnail2.png' },
  { id: 3, src: '/arrietty.mp4', thumbnail: '/thumbnail3.png' },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>(videos[0].src);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (videoElement) {
        if (entry.isIntersecting) {
          videoElement.play();
          setIsVideoPlaying(true);
        } else {
          videoElement.pause();
          setIsVideoPlaying(false);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [selectedVideo]);

  const handleVideoClick = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isVideoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="flex relative flex-col md:flex-row md:min-h-screen w-full p-2 md:p-4">
      {/* Video Section */}
      <div className="md:flex-1 flex items-center justify-center bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-r md:border-b border-t border-l border-black p-6 shadow-lg md:max-w-3/4 md:my-16">
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50 z-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <motion.video
          ref={videoRef}
          key={selectedVideo}
          src={selectedVideo}
          controls
          className="w-full h-auto md:h-3/4 object-cover z-50 border border-black"
          onClick={handleVideoClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Thumbnails Section */}
      <div className="flex md:flex-col items-center justify-center p-4 space-y-4 md:w-1/4 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-b md:border-t border-r border-black shadow-lg md:mr-2 md:my-16">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className={`relative cursor-pointer ${selectedVideo === video.src ? 'border-4 border-blue-500' : ''} transition-transform duration-300`}
            onClick={() => setSelectedVideo(video.src)}
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={video.thumbnail}
              alt={`Thumbnail ${video.id}`}
              width={300}
              height={200}
              className={`object-cover shadow-md md:w-60 ${selectedVideo === video.src ? '' : 'opacity-70'}`}
            />
            {selectedVideo !== video.src && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <FaPlay className="text-white text-4xl" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
