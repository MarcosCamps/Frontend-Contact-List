import { createSlice } from '@reduxjs/toolkit';

const initialState = { email: '', token: '' };

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;
