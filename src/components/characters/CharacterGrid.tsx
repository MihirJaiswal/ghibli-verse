'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getCharacters } from '../../services/ghibli'; // Adjust the import path as needed

const characterImages: { [key: string]: string } = {
  'Haku': '/characters/Haku.webp',
  'Pazu': '/characters/Pazu.webp',
  'Lusheeta Toel Ul Laputa': "/characters/LusheetaToelUlLaputa.webp",
  'Captain Dola': "/characters/CaptainDola.webp",
  'Romska Palo Ul Laputa': "/characters/RomskaPaloUlLaputa.webp",
  'Uncle Pom': "/characters/UnclePom.webp",
  'General Mouro': "/characters/GeneralMouro.webp",
  'Duffi': "/characters/Duffi.webp",
  'Louis': "/characters/Louis.webp",
  'Charles': "/characters/Charles.webp",
  'Henri': "/characters/Henri.webp",
  'Motro': "/characters/Motro.webp",
  'Okami': "/characters/Okami.webp",
  'Ashitaka': "/characters/Ashitaka.webp",
  'San': "/characters/San.webp",
  'Eboshi': "/characters/Eboshi.webp",
  'Jigo': "/characters/Jigo.webp",
  'Kohroku': "/characters/Kohroku.webp",
  'Gonza': "/characters/Gonza.webp",
  'Hii-sama': "/characters/Hii-sama.webp",
  'Yakul': "/characters/Yakul.webp",
  'Shishigami': "/characters/Shishigami.webp",
  'Moro': "/characters/Moro.webp",
  'Jiji': "/characters/Jiji.webp",
  'Satsuki Kusakabe': "/characters/SatsukiKusakabe.webp",
  'Mei Kusakabe': "/characters/MeiKusakabe.webp",
  'Tatsuo Kusakabe': "/characters/TatsuoKusakabe.webp",
  'Yasuko Kusakabe': "/characters/YasukoKusakabe.webp",
  'Granny': "/characters/Granny.webp",
  'Kanta Ōgaki': "/characters/Kanta.webp",
  'Totoro': "/characters/Totoro.webp",
  'Chu Totoro': "/characters/ChuTotoro.webp",
  'Chibi Totoro': "/characters/ChibiTotoro.webp",
  'Catbus': "/characters/Catbus.webp",
  'Niya': "/characters/Niya.webp",
  'Renaldo Moon aka Moon aka Muta': "/characters/RenaldoMoonakaMoonakaMuta.webp",
  'Cat King': "/characters/CatKing.webp",
  'Yuki': "/characters/Yuki.webp",
  'Haru': "/characters/Haru.webp",
  'Baron Humbert von Gikkingen': "/characters/BaronHumbertvonGikkingen.webp",
  'Natori': "/characters/Natori.webp",
  'Colonel Muska': "/characters/RomskaPaloUlLaputa.webp",
  'Porco Rosso': "/characters/PorcoRosso.webp",
  'Sosuke': "/characters/Sosuke.webp",
  'Kiki': "/characters/Kiki.webp",
  'Laputian Robot': "/characters/LaputianRobot.webp",
  'Chihiro Ogino': "/characters/ChihiroOgino.webp",
  'Osono': "/characters/Osono.webp",
  'Ursula': "/characters/Ursula.webp",
  'Tombo': "/characters/Tombo.webp",
  'Madame': "/characters/Madame.webp",
  'Earwig': "/characters/Earwig.webp",
  'Bella Yaga': "/characters/BellaYaga.webp",
  'Mandrake': "/characters/Mandrake.webp",
  'Scarlet Rose': "/characters/ScarletRose.webp",
  'Thomas': "/characters/Thomas.webp",
  'Custard': "/characters/Custard.webp",
};

const CharacterGrid: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersData = await getCharacters();
        setCharacters(charactersData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch characters');
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (characters.length === 0) {
    return <div>No characters found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Ghibli Characters</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {characters.map((character) => (
            <div key={character.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={characterImages[character.name] || '/path/to/default.jpg'}
                alt={character.name}
                width={400}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{character.name}</h2>
                {character.films && character.films.length > 0 && (
                  <p className="text-gray-700 mb-2">Film: <a href={character.films[0]} target="_blank" className="text-blue-500 underline">Link</a></p>
                )}
                <p className="text-gray-700">
                  <a href={character.url} target="_blank" className="text-blue-500 underline">More Details</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterGrid;
