import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './Contacts/selectors';
import { useSelector } from 'react-redux';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
// const contactsItems = useSelector(getContacts);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        const checkNameContacts = state.contacts.find(
          contact => contact.name === action.payload.name
        );
        if (checkNameContacts) {
          console.log(
            'Контакт с таким именем уже существует:',
            checkNameContacts
          );
          return;
        }
        state.contacts.push(action.payload);
      },
      prepare: payload => ({ payload }), // Возвращаем объект с полем "payload"
    },
    deleteContacts: {
      reducer: (state, action) => {
        state.contacts = state.contacts.filter(el => el.id !== action.payload);
        // state.splice(index, 1);
      },
    },
    prepare: payload => ({ payload }), // Возвращаем объект с полем "payload"
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
