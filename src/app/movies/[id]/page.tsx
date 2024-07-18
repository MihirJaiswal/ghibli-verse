'use client';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../../services/ghibli';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Movie {
  id: string;
  title: string;
  description: string;
  release_date: string;
  director: string;
  producer: string;
  image: string;
  movie_banner: string;
}

const MovieDetails = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

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
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <Image
            src={movie.image}
            alt={movie.title}
            layout="responsive"
            width={400}
            height={600}
            className="rounded-t-lg md:rounded-none md:rounded-l-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{movie.title}</h1>
          <p className="text-gray-700 mb-4">{movie.description}</p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Release Date:</span> {movie.release_date}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Director:</span> {movie.director}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Producer:</span> {movie.producer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
