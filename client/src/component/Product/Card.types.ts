export interface IProductCard {
  imgsrc: string;
  title: string;
  isBookmark: boolean;
  sale: number;
  price: number;
}

export interface ICategoryCard {
  imgsrc: string;
  title: string;
  isBookmark: boolean;
}

export interface IExhibitionCard {
  imgsrc: string;
  title: string;
  info: string;
  isBookmark: boolean;
}

export interface IBrandCard {
  imgsrc: string;
  title: string;
  visite: number;
  isBookmark: boolean;
}
