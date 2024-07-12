import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./Container";
import ScrollToTop from "./components/ScrollRestoration";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import SearchResults from "./pages/SearchResults/SearchResults";
import NotFound from "./pages/NotFound/NotFound";
import Genres from "./pages/Genres/Genres";
import Popular from "./pages/Popular/Popular";
import Upcoming from "./pages/Upcoming/Upcoming";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
