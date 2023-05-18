import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer, filterSlice } from './Contacts/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});

// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });
