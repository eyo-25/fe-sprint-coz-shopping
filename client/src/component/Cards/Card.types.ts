export interface ICardType {
  id: number;
  type: "Product" | "Brand" | "Exhibition" | "Category";
  title: string | null;
  sub_title: string | null;
  brand_name: string | null;
  price: string | null;
  discountPercentage: number | null;
  image_url: string | null;
  brand_image_url: string | null;
  follower: number | null;
}
