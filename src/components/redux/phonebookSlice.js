import { createSlice } from '@reduxjs/toolkit';
import { defaultContacts } from 'data/data';
import { nanoid } from 'nanoid';
console.log(defaultContacts);
const id = nanoid();

export const phonebookSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [
      { id: id, name: 'Rosie Simpson', number: '459-12-56' },
      { id: id, name: 'Hermione Kline', number: '443-89-12' },
      { id: id, name: 'Eden Clements', number: '645-17-79' },
      { id: id, name: 'Annie Copeland', number: '227-91-26' },
    ],
    filters: '',
  },

  reducers: {
    add: (state, action) => {
      console.log(action);
      state.contacts.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = phonebookSlice.actions;

// console.log(add);
