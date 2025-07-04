import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import cartSlice from './features/cart/cartSilce';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store;

// Infer the `RootState` and `AppDispatch ` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
