import React, { useState, useEffect, useCallback } from "react";
import Category from "../../components/Category/Category";
import { API_KEY } from "../../config";
const BASE_URL = "https://api.themoviedb.org/3";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=ko-KR`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch genres");
        }
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  const fetchUrl = useCallback((genreId, apiKey) => {
    const baseParams = `api_key=${apiKey}&language=ko-KR&page=1`;
    return genreId === "all"
      ? `${BASE_URL}/discover/movie?${baseParams}&sort_by=popularity.desc`
      : `${BASE_URL}/discover/movie?${baseParams}&with_genres=${genreId}`;
  }, []);

  return (
    <Category
      title="장르별 영화"
      fetchUrl={fetchUrl}
      options={genres}
      optionAll={true}
    />
  );
};

export default Genres;
