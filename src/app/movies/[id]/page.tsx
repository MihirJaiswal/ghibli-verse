'use client';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../../services/ghibli';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { characterImages, characterMovies } from '../../../../constant/index';
import CharacterCard from '../../../components/movies/CharacterCard';
import { FaClock, FaCalendarAlt, FaStar, FaArrowLeft } from 'react-icons/fa';

interface Movie {
  id: string;
  title: string;
  description: string;
  release_date: string;
  director: string;
  producer: string;
  image: string;
  movie_banner: string;
  running_time: string;
  original_title: string;
  rt_score: string;
}

const MovieDetails = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchMovie = async () => {
      if (id) {
        try {
          const movieData = await getMovieById(id);
          setMovie(movieData);
        } catch (error) {
          console.error("Error fetching movie:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-600 h-screen">Loading...</p>;
  }

  if (!movie) {
    return <p className="text-center text-red-600">Movie not found</p>;
  }

  // Filter and map characters to the movie title
  const characterList = Object.entries(characterMovies)
    .filter(([character, movieTitle]) => movieTitle === movie.title)
    .map(([character]) => ({
      id: character,
      name: character,
      image: characterImages[character] || '/path/to/default.jpg',
      film: movie.title,
    }));

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Full Page Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${movie.movie_banner})` }}
      >
        <div className="absolute top-12 left-96 z-50 flex flex-col justify-center items-center text-white text-center p-6 ">
          <div className="mb-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-28">
            <div className="flex items-center text-xl bg-gray-800 bg-opacity-50 border border-white rounded-full px-4 py-2">
              <FaClock className="mr-2 text-2xl" />
              <p>{movie.running_time}</p>
            </div>
            <div className="flex items-center text-xl bg-gray-800 bg-opacity-50 border border-white rounded-full px-4 py-2">
              <FaCalendarAlt className="mr-2 text-2xl" />
              <p>{movie.release_date}</p>
            </div>
            <div className="flex items-center text-xl bg-gray-800 bg-opacity-50 border border-white rounded-full px-4 py-2">
              <FaStar className="mr-2 text-2xl" />
              <p>{movie.rt_score}/100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gray-900 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md  overflow-hidden flex-1"
      >
        {/* Cover Image with Black Overlay */}
        <div className="relative h-48 md:h-56">
          <Image
            src={movie.movie_banner}
            alt={`${movie.title} Cover`}
            layout="fill"
            className="absolute inset-0 object-cover bg-top"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </div>

        {/* Content Section */}
        <div className="relative z-10 -mt-24 md:-mt-32 p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-1/3 md:w-1/4">
              <Image
                src={movie.image}
                alt={movie.title}
                layout="responsive"
                width={200}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-3/4 md:pl-6 mt-20">
              <h1 className="text-4xl font-bold mb-2 text-yellow-300">{movie.title}</h1>
              <p className="text-2xl font-semibold text-gray-200 mb-4">{movie.original_title}</p>
              <p className="text-gray-300 mb-4">{movie.description}</p>
              <div className="space-y-4">
                <p className="text-gray-200 text-lg">
                  <span className="font-semibold">Release Date:</span> {movie.release_date}
                </p>
                <p className="text-gray-200 text-lg">
                  <span className="font-semibold">Director:</span> {movie.director}
                </p>
                <p className="text-gray-200 text-lg">
                  <span className="font-semibold">Producer:</span> {movie.producer}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">Characters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {characterList.map((character) => (
              <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                film={character.film}
                onClick={() => console.log(`Clicked on ${character.name}`)}
              />
            ))}
          </div>
        </div>

        {/* Fixed Go Back Button */}
        <div className="fixed top-6 left-6 z-50">
          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MovieDetails;
