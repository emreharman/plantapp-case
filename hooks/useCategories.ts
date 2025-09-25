import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchCategories } from "@/store/slices/category.slice";
import { Category } from "@/types/category";
import { useEffect } from "react";

export const useCategories = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((s) => s.categories);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch]);

  return {
    items: items as Category[],
    loading,
    error,
  };
};
