import React, { useState } from "react";
import { useSelector } from "react-redux";
import useSubCategories from "../utils/useSubCategories";
import ShimmerGeneric from "./ShimmerGeneric";
import SubCategoryCard from "./SubCategoryCard";
import { SubCategory } from "../models/subCategory";

const LENGTH = 10;

const SubCategoriesContainer = () => {
  const categoryId = useSelector(
    (store: any) => store.category.activeCategoryId
  );
  console.log("inside SubCategoresContainer with id ", categoryId);
  const { subCategories, isFetching } = useSubCategories(categoryId);

  return (
    <div className="mt-6 mb-6 overflow-y-auto flex flex-wrap max-h-screen">
      {subCategories.length === 0 &&
        ((isFetching && <ShimmerGeneric />) ||
          (!isFetching && <p>No data available for this category</p>))}
      {subCategories.length > 0 &&
        subCategories.map((subCategory: SubCategory, index: number) => (
          <SubCategoryCard
            key={subCategory.subCategoryId}
            subCategory={subCategory}
          />
        ))}
    </div>
  );
};

export default SubCategoriesContainer;
