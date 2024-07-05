import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./SearchResults.scss";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

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
        <MovieGrid movies={results} />
      )}
    </div>
  );
};

export default SearchResults;
