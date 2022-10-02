import { createSlice } from '@reduxjs/toolkit';

export const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState: [],
  reducers: {
    setContactList: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setContactList } = contactsListSlice.actions;
