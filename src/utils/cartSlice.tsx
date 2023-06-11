import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItemsToCart(state: any, action) {
      state.items = [...state.items, ...action.payload];
    },
    setCartItems(state, action) {
      state.items = action.payload;
    },
    clearCartItems(state, action) {
      state.items = [];
    },
    placeOrderItems(state, action) {
      state.items = [];
    },
  },
});

export const { addItemsToCart, clearCartItems, placeOrderItems, setCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
