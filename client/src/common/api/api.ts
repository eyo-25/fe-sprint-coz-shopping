import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "http://cozshopping.codestates-seb.link/api/v1/products"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
