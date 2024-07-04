import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./SearchResults.scss";
const SearchResults = () => {
  const location = useLocation();
  const { results, searchTerm } = location.state || {};

  if (!results) {
    return <div>검색 결과를 불러올 수 없습니다.</div>;
  }

  return (
    <div className="search-results">
      <h2>
        <span>"{searchTerm}"</span> 검색 결과
      </h2>
      {results.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <div className="movie-grid">
          {results.map((movie) => (
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
      )}
    </div>
  );
};

export default SearchResults;
