import { useSelector } from "react-redux";
import { BrandCard } from "./CardTypes/BrandCard";
import { CategoryCard } from "./CardTypes/CategoryCard";
import { ExhibitionCard } from "./CardTypes/ExhibitionCard";
import { ProductCard } from "./CardTypes/ProductCard";
import { useDispatch } from "react-redux";
import { addToBookmark, removeFromBookmark } from "actions";

function Card({ product }: { product: any }) {
  const { type, id } = product;
  const dispatch = useDispatch();

  const bookmarks = useSelector((state: any) => state.bookmarkReducer);
  const isBookmarked = bookmarks.some((bookmark: number) => bookmark === id);

  const handleRemoveBookmark = (itemId: number) => {
    dispatch(removeFromBookmark(itemId));
  };
  const handleAddBookmark = (itemId: number) => {
    dispatch(addToBookmark(itemId));
  };

  const cardProps = {
    productObj: product,
    isBookmark: isBookmarked,
    handleRemoveBookmark,
    handleAddBookmark,
  };

  switch (type) {
    case "Product":
      return <ProductCard {...cardProps} />;
    case "Exhibition":
      return <ExhibitionCard {...cardProps} />;
    case "Brand":
      return <BrandCard {...cardProps} />;
    case "Category":
      return <CategoryCard {...cardProps} />;
    default:
      return null;
  }
}

export default Card;
