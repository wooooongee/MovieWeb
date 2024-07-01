import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./Container";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import ScrollToTop from "./components/ScrollRestoration";

const Router = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
