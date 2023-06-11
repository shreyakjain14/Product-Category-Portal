import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";
import titleSlice from "./titleSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categorySlice,
    title: titleSlice,
  },
});

export default store;
