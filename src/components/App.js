import React, { useEffect, useState } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from './store/Contacts/selectors';
import { addContact } from './store/contactsSlice';
import { upDate } from './store/Contacts/filterSlice';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const handleAddContact = (name, number) => {
    const id = nanoid();
    dispatch(addContact({ id, name, number }));
  };
  return (
    <div style={{ marginLeft: '50px' }}>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
