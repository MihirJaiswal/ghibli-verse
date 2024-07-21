import React from 'react';
import Image from 'next/image';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/loader.gif" // Replace with the path to your loader image
          alt="Loading..."
          height={200}
          width={200} // Ensures the image fills the container
          objectFit="contain w-44 h-auto" // Adjusts how the image fits within the container
        />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
