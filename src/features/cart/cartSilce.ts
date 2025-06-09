import { createSlice } from '@reduxjs/toolkit';
import type { CartItemsType } from '../../types/cartOrderType';
import type { RootState } from '../../store';

const initialState: CartItemsType = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.cart.includes(action.payload)) {
        console.log('already there');
      }
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.bookId !== action.payload);
    },
    increaseQty(state, action) {
      const item = state.cart.find((item) => item.bookId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseQty(state, action) {
      const item = state.cart.find((item) => item.bookId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
      if (item?.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    }
  }
});

export const { addItem, deleteItem, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

export default cartSlice;

export const getCart = (state: RootState) => state.cart.cart;

export const getCartQty = (state: RootState) => {
  return state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0);
};

export const getItemQty = (id: string) => (state: RootState) => {
  return state.cart.cart.find((item) => item.bookId === id)?.quantity ?? null;
};

export const getTotalPrice = (state: RootState) => {
  return state.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0);
};
