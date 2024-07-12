import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { API_KEY, BASE_URL } from "../../config";
import "./MovieGrid.scss";

const MovieGrid = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const fetchRecommendations = useCallback(async (movie) => {
    try {
      const response = await fetch(
        `${BASE_URL}${movie.id}/recommendations?api_key=${API_KEY}&language=ko-KR`
      );
      const data = await response.json();
      return data.results && data.results.length > 0 ? movie : null;
    } catch (error) {
      console.error(
        `Error fetching recommendations for movie ${movie.id}:`,
        error
      );
      return null;
    }
  }, []);

  useEffect(() => {
    const filterMovies = async () => {
      const validMovies = movies.filter(
        (movie) => movie.poster_path && movie.release_date
      );

      const moviesWithRecommendations = await Promise.all(
        validMovies.map(fetchRecommendations)
      );

      setFilteredMovies(moviesWithRecommendations.filter(Boolean));
    };

    filterMovies();
  }, [movies, fetchRecommendations]);

  return (
    <div className="movie-grid">
      {filteredMovies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/detail/${movie.id}`}>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>개봉일: {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
