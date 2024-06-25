import "./Main.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Main = () => {
  return (
    <>
      <div className="video-container">
        <video loop autoPlay muted className="video">
          <source
            type="video/mp4"
            src="https://videos.pexels.com/video-files/7989632/7989632-uhd_1440_2732_25fps.mp4"
          />
        </video>
        <div className="video-content">
          <p>Out Now</p>
          <h1>Movie Title</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            ratione repudiandae nostrum voluptas id qui voluptate recusandae
            dignissimos omnis, ipsum dicta modi quaerat a, possimus quos velit
            illum temporibus eligendi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quis culpa odit amet saepe eius consequuntur,
            tempora sequi tempore deleniti maiores quos debitis nesciunt
            repudiandae magni suscipit fuga at quaerat similique?
          </p>
        </div>
      </div>
      <div className="latest">
        <p>
          Latest Movie | <span className="watch">Watch All</span>
        </p>
      </div>
      <MovieSlider />
    </>
  );
};

//컴포넌트 파일로 이동 예정
const MovieSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(false);  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
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

export default Main;
