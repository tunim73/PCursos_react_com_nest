import { useCallback } from "react";
import { Categories } from "types";

export const CategoriesString = (categories?: Categories[]) => {
  const result = useCallback(() => {
    if(!categories) return ""
    return categories.map((e) => e.category.trim()).join(", ");
  }, []);

  return result;
};
