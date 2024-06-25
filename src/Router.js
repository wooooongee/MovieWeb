import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./Container";
import Main from "./pages/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
            <Route path="/" element={<Main />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
