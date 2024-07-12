import React from "react";
import { useLocation } from "react-router-dom";

import MovieGrid from "../../components/MovieGrid/MovieGrid";

import "./SearchResults.scss";

const SearchResults = () => {
  const { state } = useLocation();
  const { results, searchTerm } = state || {};

  if (!results || !searchTerm) {
    return <div className="search-results">잘못된 접근입니다.</div>;
  }

  return (
    <div className="search-results">
      <h2>
        <span>"{searchTerm}"</span> 검색 결과
      </h2>
      <MovieGrid movies={results} />
    </div>
  );
};

export default SearchResults;
