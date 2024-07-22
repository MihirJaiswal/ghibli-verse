import React from 'react';
import Image from 'next/image';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/loader.gif" 
          alt="Loading..."
          height={200}
          width={200} 
          objectFit="contain w-44 h-auto" 
        />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
