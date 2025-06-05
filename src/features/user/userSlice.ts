import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
}

const initialState: User = {
  username: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    }
  }
});

export const { updateName } = userSlice.actions;

export default userSlice;
