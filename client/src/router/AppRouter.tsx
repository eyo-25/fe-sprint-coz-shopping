import Bookmark from "pages/Bookmark";
import Main from "pages/Main";
import Productlist from "pages/Productlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/productlist"} element={<Productlist />} />
        <Route path={"/bookmark"} element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
