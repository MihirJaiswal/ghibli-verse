// components/CharacterCard.tsx
import Image from 'next/image';
import { characterImages } from '../../../constant';

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  film: string;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, image, film, onClick }) => {
  const imageUrl = characterImages[name] || image;

  return (
    <div
      key={id}
      className="bg-white bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-200 p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="border-2 border-gray-300"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{name}</h2>
        {film && (
          <p className="text-gray-700 text-sm">Film: {film}</p>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
