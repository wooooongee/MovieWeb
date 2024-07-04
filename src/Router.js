import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./Container";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import ScrollToTop from "./components/ScrollRestoration";
import SearchResults from "./pages/SearchResults/SearchResults";
import NotFound from "./pages/NotFound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
