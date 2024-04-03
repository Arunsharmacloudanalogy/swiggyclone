import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const { newItem, op } = action.payload;
      const existingItemIndex = state.findIndex(
        (item) => item.title === newItem.title
      );
      if (existingItemIndex !== -1) {
        op === "i"
          ? (state[existingItemIndex].foodQuantity += 1)
          : (state[existingItemIndex].foodQuantity -= 1);

        if (state[existingItemIndex].foodQuantity === 0) {
          state.splice(existingItemIndex, 1);
        }
      } else {
        state.push(newItem);
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.title !== action.payload.title);
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
