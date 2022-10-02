import { createSlice } from '@reduxjs/toolkit';

export const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState: [],
  reducers: {
    setContactList: (state, { payload }) => {
      state = payload;
      return state;
    },
    addContactList: (state: any, { payload }) => {
      state.push(payload);
      return state;
    },
  },
});

export const { setContactList, addContactList } = contactsListSlice.actions;
