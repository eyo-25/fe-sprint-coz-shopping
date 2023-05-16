export interface IProductObj {
  id: number;
  type: "Product";
  title: string;
  sub_title: null;
  brand_name: null;
  price: string;
  discountPercentage: number;
  image_url: string;
  brand_image_url: null;
  follower: null;
}

export interface IProductCard {
  productObj: IProductObj;
  isBookmark: boolean;
}

export interface ICategoryObj {
  id: number;
  type: "Category";
  title: string;
  sub_title: null;
  brand_name: null;
  price: null;
  discountPercentage: null;
  image_url: string;
  brand_image_url: null;
  follower: null;
}

export interface ICategoryCard {
  productObj: ICategoryObj;
  isBookmark: boolean;
}

export interface IExhibitionObj {
  id: number;
  type: "Exhibition";
  title: string;
  sub_title: string;
  brand_name: null;
  price: null;
  discountPercentage: null;
  image_url: string;
  brand_image_url: null;
  follower: null;
}

export interface IExhibitionCard {
  productObj: IExhibitionObj;
  isBookmark: boolean;
}

export interface IBrandObj {
  id: number;
  type: "Brand";
  title: null;
  sub_title: null;
  brand_name: string;
  price: null;
  discountPercentage: null;
  image_url: null;
  brand_image_url: string;
  follower: number;
}

export interface IBrandCard {
  productObj: IBrandObj;
  isBookmark: boolean;
}
