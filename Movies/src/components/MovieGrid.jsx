import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  const fetchMovies = async () => {
    try {
      const res = await fetch("https://jsonfakery.com/movies/paginated");
      const data = await res.json();
      setMovies(data.data);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };
  fetchMovies();
}, []);

  return (
    <div className="cardContainer">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieGrid;
