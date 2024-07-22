'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const videos = [
  { id: 1, src: '/spiritedaway.mp4', thumbnail: '/thumbnail1.png' },
  { id: 2, src: '/poppyhill.mp4', thumbnail: '/thumbnail2.png' },
  { id: 3, src: '/arrietty.mp4', thumbnail: '/thumbnail3.png' },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].src);
  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.play();
    }
  }, [selectedVideo]);

  return (
    <div className="flex relative flex-col md:flex-row md:min-h-screen w-full p-2 md:p-4 ">
      {/* Video Section */}
      <div className="md:flex-1 flex items-center justify-center bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-r md:border-b border-t border-l border-black p-6  shadow-lg md:max-w-3/4 md:my-16">
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50 z-0' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
        <motion.video
          key={selectedVideo}
          src={selectedVideo}
          controls
          className="w-full h-auto md:h-3/4 object-cover z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="flex md:flex-col items-center justify-center p-4 space-y-4 md:w-1/4 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-b md:border-t border-r border-black shadow-lg md:mr-2 md:my-16">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="cursor-pointer"
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
              className="object-cover shadow-md md:w-60"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );

};

export default VideoGallery;
