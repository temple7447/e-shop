import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item._id === newItem._id);

      if (!existingItem) {
        state.items.push(newItem);
        state.totalPrice += parseInt(newItem.Price);
      }
    },
    remove(state, action) {
      const removedItem = state.items.find(item => item._id === action.payload);
      if (removedItem) {
        state.totalPrice -= parseInt(removedItem.Price);
        state.items = state.items.filter(item => item._id !== action.payload);
      }
    },
    clear(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { add, remove , clear} = cartSlice.actions;

export default cartSlice.reducer;
