import {
  configureStore, ThunkAction, Action, combineReducers,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { currentThemeSlice, currentUserSlice, contactsListSlice } from './slicers';

const rootReducer = combineReducers({
  currentTheme: currentThemeSlice.reducer,
  currentUser: currentUserSlice.reducer,
  contactsList: contactsListSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

export const persistor = persistStore(store);
