import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieSlider.scss";
import { useNavigate } from "react-router-dom";

const MovieSlider = ({endpoint}) => {
  const key = "cea591806ee129e294031c6b81dcea4a";
  const URL = "https://api.themoviedb.org/3/movie/";
  const navigate = useNavigate();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${URL}${endpoint}?api_key=${key}&language=ko-KR&page=1`
        );
        const data = await response.json();
        setMovies(data.results ? data.results.slice(0, 10) : [data]);
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
                    <p>{movie.overview ? movie.overview.slice(0, 100) + "..." : "설명이 없습니다."}</p>
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