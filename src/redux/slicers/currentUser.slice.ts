import { createSlice } from '@reduxjs/toolkit';

const initialState = { email: '', id: 0, token: '' };

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
