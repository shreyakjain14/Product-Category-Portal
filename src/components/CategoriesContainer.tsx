import { useEffect, useState } from "react";
import ShimmerCategories from "./ShimmerCategories";
import CategoryCard from "./CategoryCard";
import { Category } from "../models/category";
import useCategories from "../utils/useCategories";
import { useDispatch } from "react-redux";
import { setActiveCategoryId } from "../utils/categorySlice";
import { setTitle } from "../utils/titleSlice";

const CategoriesContainer = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const categories: any = useCategories();
  const dispatch = useDispatch();

  const changeActiveCategory = (idx: number, id: string) => {
    setActiveCategoryIdx(idx);
    dispatch(setActiveCategoryId(id));
  };

  useEffect(() => {
    console.log("inside useEffect of categoires container");
    dispatch(setActiveCategoryId(categories[activeCategoryIdx]?.categoryId));
    dispatch(setTitle(categories[activeCategoryIdx]?.categoryName));
  }, [activeCategoryIdx, categories]);

  return (
    <div className="flex flex-nowrap overflow-scroll flex-1 mt-6 pb-6">
      {categories.length === 0 && <ShimmerCategories />}
      {categories.length !== 0 &&
        categories.map((category: Category, index: number) => (
          <CategoryCard
            key={category.categoryId}
            category={category}
            categoryIdx={index}
            activeCategoryIdx={activeCategoryIdx}
            onClick={() => changeActiveCategory(index, category.categoryId)}
          />
        ))}
    </div>
  );
};

export default CategoriesContainer;
