import React, { useState, useEffect } from "react";
import "./Main.scss";
import MovieSlider from "../../components/MovieSlider/MovieSlider";

const Main = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const key = "cea591806ee129e294031c6b81dcea4a";
  const baseURL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      try {
        const popularResponse = await fetch(
          `${baseURL}/movie/popular?api_key=${key}&language=ko-KR&page=1`
        );
        const popularData = await popularResponse.json();
        for (let movie of popularData.results) {
          const videoResponse = await fetch(
            `${baseURL}/movie/${movie.id}/videos?api_key=${key}&language=ko-KR`
          );
          const videoData = await videoResponse.json();

          if (videoData.results && videoData.results.length > 0) {
            const videoKey = videoData.results[0].key;
            setFeaturedMovie({
              ...movie,
              videoUrl: `https://www.youtube.com/embed/${videoKey}`,
            });
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
  }, []);

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
