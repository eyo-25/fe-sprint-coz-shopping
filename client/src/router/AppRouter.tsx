import BookmarkList from "pages/Bookmarklist/Bookmarklist";
import Main from "pages/Main/Main";
import Productlist from "pages/Productlist/Productlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/productlist"} element={<Productlist />} />
        <Route path={"/Bookmarklist"} element={<BookmarkList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
