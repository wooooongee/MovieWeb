import "./Detail.scss";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-container">
      <h1 onClick={()=>{navigate('/')}} className="navigate-btn">
        Back to Main
      </h1>
      <div className="detail-box">
        <div className="detail-title">
          <h1 className="title">Nom Nom Nom</h1>
          <img
            className="detail-img"
            src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="detail-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium doloremque asperiores odio error eos fugiat. Beatae
            doloremque eum itaque, cupiditate saepe enim et voluptatum adipisci
            aspernatur similique, ea delectus ad! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat officiis nulla vero nesciunt.
            Numquam tempore nesciunt officia omnis id libero illo voluptate eius
            nostrum et facilis, ipsam nisi voluptatem dolor.
          </p>
        </div>
      </div>
      <div className="recommend-box">
        <h1 className="recommend">Recommended video</h1>
        <MovieSlider />
      </div>
    </div>
  );
};

export default Detail;
