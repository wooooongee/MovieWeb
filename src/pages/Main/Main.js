import "./Main.scss";
import MovieSlider from "../../components/MovieSlider/MovieSlider";

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

export default Main;
