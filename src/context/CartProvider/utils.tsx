import api from "../../services/api";
import { Product } from "./types";

export const fetchData = async (): Promise<Product[] | null> => {
  try {
    const response = await api.get("products");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
