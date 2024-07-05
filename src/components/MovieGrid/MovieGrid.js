import React from "react";
import { Link } from "react-router-dom";
import "./MovieGrid.scss";

const MovieGrid = ({ movies }) => {
  if (movies.length === 0) {
    return <p>표시할 영화가 없습니다.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
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