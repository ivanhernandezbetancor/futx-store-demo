import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.isOpen = true; // Auto open cart when adding
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => !(item.id === action.payload.id && item.size === action.payload.size));
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(i => !(i.id === item.id && i.size === item.size));
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, toggleCart, closeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
