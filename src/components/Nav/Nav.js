import React, { useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <p>◼︎ J.w Movie</p>
        </div>
        <div
          className="menu"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="menu-item">
            <p>Genres</p>
          </div>
          <div className="menu-item">
            <p>Rating</p>
          </div>
          <div className="menu-item">
            <p>Runtime</p>
          </div>
          {isHovered && (
            <div className="dropdown">
              <div className="dropdown-section">
                <p>Action</p>
                <p>Drama</p>
                <p>Comedy</p>
              </div>
              <div className="dropdown-section">
                <p>PG</p>
                <p>PG-13</p>
                <p>R</p>
              </div>
              <div className="dropdown-section">
                <p>Short</p>
                <p>Medium</p>
                <p>Long</p>
              </div>
            </div>
          )}
        </div>
        <div className="search">
          <p>Search</p>
          <input type="text" placeholder="Enter movie title" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
