import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieSlider.scss";
import { useNavigate } from "react-router-dom";
import { API_KEY,BASE_URL } from "../../config";

const MovieSlider = ({ endpoint }) => {
  const navigate = useNavigate();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=ko-KR&page=1`
        );
        const data = await response.json();
        // poster_path와 movie.overview 값이 비어있는 경우가 많아 필터링
        const filteredMovies = data.results.filter(
          (movie) => movie.poster_path && movie.overview
        );
        //  추천 영화 정보(recommendations)가 없는 data는 목록에서 제외
        const moviesWithRecommendations = await Promise.all(
          filteredMovies.map(async (movie) => {
            const recommendationsResponse = await fetch(
              `${BASE_URL}${movie.id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
            );
            const recommendationsData = await recommendationsResponse.json();
            return recommendationsData.results.length > 0 ? movie : null;
          })
        );

        setMovies(moviesWithRecommendations.filter((movie) => movie !== null));
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    pauseOnFocus: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="slider-box">
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div className="slide-item" key={movie.id}>
            <div
              className="slide-content"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(`/detail/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={hoveredIndex === index ? "hovered" : ""}
              />
              {hoveredIndex === index && (
                <div className="overlay">
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.overview.slice(0, 100) + "..."}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
