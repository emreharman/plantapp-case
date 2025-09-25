import { Category } from "@/types/category";
import apiClient from "./apiClient";

export const CategoryService = {
  getCategories: async (): Promise<Category[]> => {
    const res = await apiClient.get("/getCategories");
    return res.data?.data.sort(
      (a: Category, b: Category) => a.rank - b.rank
    );
  },
};
