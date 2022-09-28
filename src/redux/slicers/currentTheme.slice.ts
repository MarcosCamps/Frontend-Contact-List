import { createSlice } from '@reduxjs/toolkit';

const initialState = 'default';

export const currentThemeSlice = createSlice({
  name: 'currentTheme',
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setTheme } = currentThemeSlice.actions;
