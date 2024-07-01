import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import "./MovieSlider.scss"
import { useNavigate } from "react-router-dom";

const MovieSlider = () => {
    const [hoveredIndex, setHoveredIndex] = useState(false);  const settings = {
      dots: true,
      infinite: true,
      speed: 900,
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

    const navigate = useNavigate();
  
    //fetch요청으로 받아올 데이터 예시
    const images = [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "영화 제목 1",
        description: "영화 소개글 1",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "영화 제목 2",
        description: "영화 소개글 2",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "영화 제목 3",
        description: "영화 소개글 2",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "영화 제목 4",
        description: "영화 소개글 2",
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "영화 제목 4",
        description: "영화 소개글 2",
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "영화 제목 4",
        description: "영화 소개글 2",
      },
      {
        id: 7,
        src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "영화 제목 4",
        description: "영화 소개글 2",
      },
      {
        id: 8,
        src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "영화 제목 4",
        description: "영화 소개글 2",
      },
    ];
  
    return (
      <div className="slider-box">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="slide-item" key={image.id}>
              <div
                className="slide-content"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(false)}
                onClick={()=>{navigate('/detail/1')}}
              >
                <img
                  src={image.src}
                  alt=""
                  className={hoveredIndex === index ? "hovered" : ""}
                />
                {hoveredIndex === index && (
                  <div className="overlay">
                    <div className="movie-info">
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
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