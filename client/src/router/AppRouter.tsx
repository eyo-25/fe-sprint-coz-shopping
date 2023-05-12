import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<></>} />
        <Route path={"/productlist"} element={<></>} />
        <Route path={"/bookmark"} element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
