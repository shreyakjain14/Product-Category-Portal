import React from "react";
import { SubCategory } from "../models/subCategory";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../utils/titleSlice";

const SubCategoryCard = ({ subCategory }: { subCategory: SubCategory }) => {
  const { categoryId, subCategoryId, subCategoryImageURL, subCategoryName } =
    subCategory;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToSubCategory = () => {
    navigate("products", {
      state: {
        id: subCategoryId,
      },
    });

    dispatch(setTitle("All Products"));
  };

  return (
    <button
      onClick={navigateToSubCategory}
      className="flex w-60 h-60 mb-10 mr-10 border border-gray-300 rounded-lg items-center justify-between flex-col pb-3"
    >
      <img
        className="w-40 h-40 mt-4"
        alt="empty-image"
        src={subCategoryImageURL}
      />
      <div className="bottom-10 ">{subCategoryName}</div>
    </button>
  );
};

export default SubCategoryCard;
