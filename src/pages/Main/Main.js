import React, { useState, useEffect, useCallback } from "react";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { API_KEY, BASE_URL } from "../../config";
import "./Main.scss";

const Main = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieWithVideo = useCallback(async (movie) => {
    const videoResponse = await fetch(
      `${BASE_URL}${movie.id}/videos?api_key=${API_KEY}&language=ko-KR`
    );
    const videoData = await videoResponse.json();

    if (videoData.results && videoData.results.length > 0) {
      const videoKey = videoData.results[0].key;
      return {
        ...movie,
        videoUrl: `https://www.youtube.com/embed/${videoKey}`,
      };
    }
    return null;
  }, []);

  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      try {
        const popularResponse = await fetch(
          `${BASE_URL}popular?api_key=${API_KEY}&language=ko-KR&page=1`
        );
        const popularData = await popularResponse.json();
        
        for (let movie of popularData.results) {
          const movieWithVideo = await fetchMovieWithVideo(movie);
          if (movieWithVideo) {
            setFeaturedMovie(movieWithVideo);
            break;
          }
        }
      } catch (error) {
        console.error("Error fetching featured movie:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedMovie();
  }, [fetchMovieWithVideo]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      {featuredMovie && (
        <div className="video-container">
          {featuredMovie.videoUrl ? (
            <iframe
              src={featuredMovie.videoUrl}
              title={featuredMovie.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
              alt={featuredMovie.title}
            />
          )}
          <div className="video-content">
            <p>최고 인기 영화</p>
            <h1>{featuredMovie.title}</h1>
            <p>{featuredMovie.overview}</p>
          </div>
        </div>
      )}
      <div className="latest">
        <p>
          Latest Movie | <span className="watch">Watch All</span>
        </p>
      </div>
      <MovieSlider endpoint="now_playing" />
    </>
  );
};

export default Main;