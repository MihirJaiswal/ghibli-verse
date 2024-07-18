import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 text-gray-800 py-8 px-4 relative mt-16 z-50 border-t border-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <div className='flex flex-col items-center gap-2'>
          <Image
            src="/log.png"
            alt="Ghibli Logo"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover w-10"
          /> 
           <h3 className="text-2xl font-bold mb-2">Ghibli Verse</h3>
          </div>
          <p className="text-xs">Explore the magical world of Studio Ghibli</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-800">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-800">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-800">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm mb-2">Contact us at:</p>
          <p className="text-sm font-semibold">info@ghibliverse.com</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
        &copy; 2024 Ghibli Verse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
