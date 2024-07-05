import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieGrid from "../MovieGrid/MovieGrid";
import "./Category.scss";

const Category = ({ title, fetchUrl, options, optionAll }) => {
  const [selectedOption, setSelectedOption] = useState(optionAll ? "all" : "");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const key = "cea591806ee129e294031c6b81dcea4a";

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const url = fetchUrl(selectedOption, key);
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(`Error fetching ${title}:`, error);
        navigate("*");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [selectedOption, navigate, fetchUrl, title]);

  return (
    <div className="category-page">
      <h1>{title}</h1>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {optionAll && <option value="all">모든 {title}</option>}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
};

export default Category;
