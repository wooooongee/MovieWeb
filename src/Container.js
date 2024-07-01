import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Container;
