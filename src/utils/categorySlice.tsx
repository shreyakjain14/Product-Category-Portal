import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategoryId: null,
  categorySubCategoryMp: {},
  categories: [],
  subCategoryProductsMp: {},
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategoryId(state, action) {
      state.activeCategoryId = action.payload;
    },
    setSubCategoriesCache(state, action) {
      const { categoryId, subCategories } = action.payload;
      state.categorySubCategoryMp = Object.assign(state.categorySubCategoryMp, {
        [categoryId]: subCategories,
      });
    },
    setCategoriesCache(state, action) {
      state.categories = action.payload;
    },
    setProductsForSubCategory(state, action) {
      const { id, products } = action.payload;
      state.subCategoryProductsMp = Object.assign(state.subCategoryProductsMp, {
        [id]: products,
      });
    },
  },
});

export const {
  setActiveCategoryId,
  setSubCategoriesCache,
  setCategoriesCache,
  setProductsForSubCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
