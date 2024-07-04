import "./Detail.scss";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [trailers, setTrailers] = useState([]);
  const key = "cea591806ee129e294031c6b81dcea4a";
  const URL = "https://api.themoviedb.org/3/movie/";
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `${URL}${id}?api_key=${key}&language=ko-KR`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    const fetchTrailers = async () => {
      try {
        const response = await fetch(
          `${URL}${id}/videos?api_key=${key}&language=ko-KR`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setTrailers(data.results);
        console.log(trailers);
      } catch (error) {
        console.error("Error fetching trailers:", error);
      }
    };

    fetchMovieData();
    fetchTrailers();
  }, [id]);
  if (!movieData) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="navigate-btn"
      >
        Back to Main
      </h1>
      <div className="detail-box">
        <div className="detail-title">
          <h1 className="title">{movieData.title}</h1>
          <img
            className="detail-img"
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
          />
        </div>
        <div className="detail-content">
          <p className="content">{movieData.overview}</p>
          <div className="trailers">
            {trailers.slice(0, 3).map((trailer) => (
              <div key={trailer.id} className="trailer">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title={trailer.name}
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="recommend-box">
        <h1 className="recommend">Recommended video</h1>
        {/* /{movie_id}/recommendations 
            이 엔드포인트는 특정 영화와 비슷한 영화들을 추천해줍니다. 
            이는 단순히 같은 장르뿐만 아니라 TMDB의 알고리즘을 통해 선정된 비슷한 특성을 가진 영화들을 제공
        */}
        <MovieSlider endpoint={`${id}/recommendations`} />
      </div>
    </div>
  );
};

export default Detail;
