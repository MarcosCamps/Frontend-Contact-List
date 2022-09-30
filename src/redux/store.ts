import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { currentThemeSlice, currentUserSlice } from './slicers';

export const store = configureStore({
  reducer: {
    currentTheme: currentThemeSlice.reducer,
    currentUser: currentUserSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
