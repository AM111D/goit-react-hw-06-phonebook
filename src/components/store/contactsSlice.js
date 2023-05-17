import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const id = nanoid();

const initialState = {
    contacts: [
      { id: id, name: 'Rosie Simpson', number: '459-12-56' },
      { id: id, name: 'Hermione Kline', number: '443-89-12' },
      { id: id, name: 'Eden Clements', number: '645-17-79' },
      { id: id, name: 'Annie Copeland', number: '227-91-26' },
  ]
}

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState,
    
  },

  reducers: {
    add: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
);

// Action creators are generated for each case reducer function
export const { add } = phonebookSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// console.log(add);
