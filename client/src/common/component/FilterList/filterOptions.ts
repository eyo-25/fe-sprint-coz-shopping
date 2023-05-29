import totalImage from "common/assets/categories/total.png";
import poductImage from "common/assets/categories/poduct.png";
import categoryImage from "common/assets/categories/category.png";
import exhibitionImage from "common/assets/categories/exhibition.png";
import brandImage from "common/assets/categories/brand.png";
import {
  BRAND,
  CATEGORY,
  EXHIBITION,
  PRODUCT,
  TOTAL,
} from "common/constants/constants";

export const filterOptions = [
  {
    title: "전체",
    type: TOTAL,
    imageSrc: totalImage,
  },
  {
    title: "상품",
    type: PRODUCT,
    imageSrc: poductImage,
  },
  {
    title: "카테고리",
    type: CATEGORY,
    imageSrc: categoryImage,
  },
  {
    title: "기획전",
    type: EXHIBITION,
    imageSrc: exhibitionImage,
  },
  {
    title: "브랜드",
    type: BRAND,
    imageSrc: brandImage,
  },
];
