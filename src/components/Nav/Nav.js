import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <p>◼︎ J.w Movie</p>
        </div>
        <div className="menu">
          <p>Genres</p>
          <p>Rating</p>
          <p>Runtime</p>
        </div>
        <div className="search">
            <p>Search</p>
            <input type="text" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
