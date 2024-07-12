import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { API_KEY } from "../../config";
import "./Nav.scss";

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchTerm("");
  }, [location]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim().length < 2) return alert("두 글자 이상 입력하세요");

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&query=${searchTerm}&page=1&include_adult=false`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        if (data.results.length === 1) {
          navigate(`/detail/${data.results[0].id}`);
        } else {
          navigate("/search-results", {
            state: { results: data.results, searchTerm },
          });
        }
      } else {
        alert("검색결과가 없습니다.");
        setSearchTerm("");
      }
    } catch (error) {
      console.error("Error searching for movie:", error);
      navigate("*");
    }
  };

  const handleNavigation = (path) => () => navigate(path);

  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={handleNavigation("/")}>
          <p>◼︎ J.w Movie</p>
        </div>
        <div className="menu">
          {["genres", "popular", "upcoming"].map((item) => (
            <div key={item} className="menu-item">
              <p onClick={handleNavigation(`/${item}`)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </div>
          ))}
        </div>
        <div className="search">
          <p>Search</p>
          <form onSubmit={handleSearch}>
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              type="text"
              placeholder="Enter movie title"
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
