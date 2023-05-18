import Bookmark from "pages/Bookmark/Bookmark";
import Main from "pages/Main/Main";
import Productlist from "pages/Productlist/Productlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}>
          <Route path={"/:productId"} element={<Main />} />
        </Route>
        <Route path={"/productlist"} element={<Productlist />} />
        <Route path={"/bookmark"} element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
