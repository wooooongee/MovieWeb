import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const Container = () => {
  return (
    <React.Fragment>
      <Nav />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Container;
