import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterSlice } from './Contacts/filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);
