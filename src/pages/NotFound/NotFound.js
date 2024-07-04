import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
return(
    <div className="not-found-container">
    <div className="content">
      <h1>404</h1>
      <h2>오늘의 상영은 끝났습니다</h2>
      <p>찾으시는 페이지가 영화처럼 사라졌네요!</p>
      <div className="film-strip">
      </div>
      <Link to="/" className="home-button">
        메인 페이지로 돌아가기
      </Link>
    </div>
  </div>
)
};

export default NotFound;
