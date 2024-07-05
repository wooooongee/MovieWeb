import React, { useState, useEffect } from "react";
import Category from "../../components/Category/Category";
const Genres = () => {
  const [genres, setGenres] = useState([]);
  const key = "cea591806ee129e294031c6b81dcea4a";

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=ko-KR`
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  const fetchUrl = (genreId, apiKey) => 
    genreId === "all" 
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&page=1`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&with_genres=${genreId}&page=1`;

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