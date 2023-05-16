import { loadBookmark, loadProducts } from "actions";
import AppRouter from "./router/AppRouter";
import { fetchProducts } from "api/api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBookmarks } from "utils/useBookMark";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const productsData = localStorage.getItem("products");
    const bookmarksData = getBookmarks();
    if (0 < bookmarksData.length) {
      dispatch(loadBookmark(bookmarksData));
    }

    if (productsData !== null) {
      const parsedProductsData = JSON.parse(productsData);
      dispatch(loadProducts(parsedProductsData));
    } else {
      fetchProducts()
        .then((data) => {
          dispatch(loadProducts(data));
          localStorage.setItem("products", JSON.stringify(data));
        })
        .catch((err) => console.log(err));
    }
  }, [dispatch]);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
