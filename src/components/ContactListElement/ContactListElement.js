import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import css from './ContactListElement.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilterValue,
} from 'components/store/Contacts/selectors';
import { upDate } from 'components/store/Contacts/filterSlice';
import { deleteContacts } from 'components/store/contactsSlice';

const ContactListElement = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue); // Получите значение фильтра из хранилища Redux
  const contacts = useSelector(getContacts);

  // const filteredList = () => {
  //   console.log(contacts);
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(String(filter).toLowerCase().trim())
  //   );
  // };

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const filteredContacts = useSelector(getContacts);
  // Получите отфильтрованный список контактов из хранилища Redux
  console.log('КОНТАКТЫ', contacts);
  return (
    <>
      {contacts.map(contact => (
        <li className={css.contactElement} key={contact.id}>
          <p>{contact.name}:</p>
          <p>{contact.number}</p>
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

// ContactListElement.propTypes = {
//   name: propTypes.string.isRequired,
//   number: propTypes.string.isRequired,
//   onClick: propTypes.func,
// };

export default ContactListElement;
